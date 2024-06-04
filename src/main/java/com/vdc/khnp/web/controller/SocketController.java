package com.vdc.khnp.web.controller;

import com.jcraft.jsch.*;
import com.vdc.khnp.web.service.SocketService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.HashMap;
import java.util.Map;



@RestController
@RequestMapping("/sendCommand")
public class SocketController {
    protected final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Value("${ssh.main.ip:192.168.103.81}")
    private String mainIp;

    @Value("${ssh.mainbackup.ip:192.168.103.91}")
    private String mainBackupIp;

    @Value("${ssh.toll.ip:192.168.103.93}")
    private String tollIp;

    @Value("${ssh.tollbackup.ip:192.168.103.94}")
    private String tollBackupIp;

    @Value("${ssh.port:22}")
    private int sshPort;

    @Value("${ssh.user:engr}")
    private String sshUser;

    @Value("${ssh.password:vdc7200#}")
    private String sshPassword;

    @Resource(name = "socketService")
    private SocketService socketService;

    @PostMapping
    @ResponseBody
    public Map<String, Object> sendCommand(@RequestBody Map<String, String> request, HttpServletRequest httpRequest) throws Exception {
        logger.info("sendCommand endpoint");

        HttpSession session = httpRequest.getSession(false);
        if (session == null || session.getAttribute("userid") == null) {
            logger.warn("User not logged in");
            Map<String, Object> result = new HashMap<>();
            result.put("success", false);
            result.put("message", "User not logged in");
            return new ResponseEntity<>(result, HttpStatus.UNAUTHORIZED).getBody();
        }

        String mainCommand = request.get("command");
        String regUserid = (String) session.getAttribute("userid");
        String referer = httpRequest.getHeader("Referer");
        int code = PageSelect(referer);

        logger.info("Executing SSH command sequence on main and backup servers");
        String mainIp = getMainIp(referer);
        String backupIp = getBackupIp(referer);

        // 에러 방지를 위해 IP 확인
        if (mainIp == null && backupIp == null) {
            logger.error("Both Main and Backup IPs are null. Referer: {}", referer);
            throw new IllegalArgumentException("Invalid referer: unable to determine main and backup IPs.");
        }

        String mainResponse = null;
        if (mainIp != null) {
            mainResponse = executeSshCommands(mainCommand, mainIp);
            try {
                String backupResponse = executeSshCommands(mainCommand, backupIp);
                logger.info("Backup server response: {}", backupResponse);
            } catch (Exception e) {
                logger.error("Error executing command on backup server: {}", e.getMessage());
            }
        } else {
            mainResponse = executeSshCommands(mainCommand, backupIp);
        }

        logger.info("Inserting command into database");
        Map<String, Object> commandMap = new HashMap<>();
        commandMap.put("code", code);
        commandMap.put("input", mainCommand);
        commandMap.put("output", mainResponse);
        commandMap.put("reg_userid", regUserid);

        socketService.insertCommand(commandMap);

        logger.info("Returning response");
        Map<String, Object> result = new HashMap<>();
        result.put("success", true);
        result.put("response", mainResponse);
        logger.info("Response data inserted into database successfully");
        return result;

    }

    private int PageSelect(String referer) {
        if (referer.contains("/main")) {
            return 1;
        } else if (referer.contains("/backup")) {
            return 2;
        } else if (referer.contains("/tollmain")) {
            return 3;
        } else if (referer.contains("/tollbackup")) {
            return 4;
        }
        return 0;
    }

    private String getMainIp(String referer) {
        if (referer.contains("/main")) {
            return mainIp;
        } else if (referer.contains("/tollmain")) {
            return tollIp;
        }
        return null;
    }

    private String getBackupIp(String referer) {
        if (referer.contains("/main")) {
            return mainBackupIp;
        } else if (referer.contains("/tollmain")) {
            return tollBackupIp;
        } else if (referer.contains("/backup")) {
            return mainBackupIp;
        } else if (referer.contains("/tollbackup")) {
            return tollBackupIp;
        }
        return null;
    }

    private String executeSshCommands(String mainCommand, String ip) throws Exception {
        StringBuilder output = new StringBuilder();

        JSch jsch = new JSch();
        Session session = null;
        Channel channel = null;
        try {
            logger.info("Setting up SSH session to {}", ip);
            session = jsch.getSession(sshUser, ip, sshPort);
            session.setPassword(sshPassword);

            session.setConfig("StrictHostKeyChecking", "no");
            session.connect();
            logger.info("SSH session connected to {}", ip);

            channel = session.openChannel("shell");
            InputStream input = channel.getInputStream();
            OutputStream outputStream = channel.getOutputStream();
            PrintStream commander = new PrintStream(outputStream, true);

            channel.connect();
            logger.info("SSH channel connected to {}", ip);

            // 호스트키 무시 코드
            waitForPrompt(input, "Last login");

            // Assistant-linux:/home/engr # 명령어가 나오면 dipas_batch 입력
            logger.info("Executing dipas_batch command on {}", ip);
            commander.println("dipas_batch");
            commander.flush();

            // dipas_batch 입력 완료 시 나오는 메시지
            waitForPrompt(input, "ACTUAL CODEWORD EXPIRES AT");

            // 커맨드 파라미터 입력
            logger.info("Executing main command: {} on {}", mainCommand, ip);
            commander.println(mainCommand);
            commander.flush();

            // COMPLETED 까지의 서버 응답 웹에 출력
            output.append(readChannelOutput(channel, "COMPLETED;"));

        } catch (Exception e) {
            logger.error("Error during SSH command execution on {}", ip, e);
            throw e;
        } finally {
            if (channel != null && channel.isConnected()) {
                channel.disconnect();
                logger.info("SSH channel disconnected from {}", ip);
            }
            if (session != null && session.isConnected()) {
                session.disconnect();
                logger.info("SSH session disconnected from {}", ip);
            }
        }
        return filterOutput(output.toString());
    }

    private void waitForPrompt(InputStream input, String prompt) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(input));
        String line;
        logger.info("Waiting for prompt: {}", prompt);
        while ((line = reader.readLine()) != null) {
            logger.debug("Received line: {}", line);
            if (line.contains(prompt)) {
                logger.info("Prompt found");
                break;
            }
        }
    }

    private String readChannelOutput(Channel channel, String untilPrompt) throws IOException {
        StringBuilder outputBuffer = new StringBuilder();
        BufferedReader reader = new BufferedReader(new InputStreamReader(channel.getInputStream()));
        String line;
        logger.info("Reading channel output until prompt: {}", untilPrompt);
        while ((line = reader.readLine()) != null) {
            outputBuffer.append(line).append("\n");
            logger.debug("Received line: {}", line);
            if (line.contains(untilPrompt)) {
                logger.info("Until prompt found in output");
                break;
            }
        }
        return outputBuffer.toString();
    }

    private String filterOutput(String output) {
        // M1: NO COMMAND ENTERED 오류 메시지 필터로 예외처리
        String[] lines = output.split("\n");
        StringBuilder filteredOutput = new StringBuilder();
        for (String line : lines) {
            if (!line.contains("M1: NO COMMAND ENTERED")) {
                filteredOutput.append(line).append("\n");
            }
        }
        return filteredOutput.toString();
    }
}
