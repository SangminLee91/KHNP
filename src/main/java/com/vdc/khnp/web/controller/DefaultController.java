package com.vdc.khnp.web.controller;

import com.vdc.khnp.common.resolver.CommandMap;
import com.vdc.khnp.configuration.WebSessionListener;
import com.vdc.khnp.web.service.DefaultService;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.servlet.ModelAndView;

import java.net.URLDecoder;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@Controller
public class DefaultController {

    @Resource(name = "defaultService")
    private DefaultService defaultService;
    @Resource(name = "webSessionListener")
    private WebSessionListener webSessionListener;

    @RequestMapping("/login")
    public ModelAndView Login(HttpSession session) {
        ModelAndView mv = new ModelAndView("view/login");
        if(session.getAttribute("userid") != null) mv.setViewName("redirect:/main");
        return mv;
    }


    @RequestMapping("/login/proc")
    @ResponseBody
    public Map<String,Object> loginProc(CommandMap commandMap, HttpServletRequest request) throws Exception {
        Map<String, Object> rMap = defaultService.login_proc(commandMap.getMap());
        Map<String, Object> Map = new HashMap<>();

        boolean success = false;

        if (rMap != null && !rMap.isEmpty()) {

            HttpSession session = request.getSession();

            if (!webSessionListener.isLoginUser(request, commandMap.getMap().get("userid").toString())) {
                session.setAttribute("userid", URLDecoder.decode(rMap.get("userid").toString(), StandardCharsets.UTF_8));
                webSessionListener.setSession(request, URLDecoder.decode(rMap.get("userid").toString(), StandardCharsets.UTF_8));

                success = true;
                Map.put("msg", "login ok");
                Map.put("token", session.getId());
                Map.put("map", rMap);

            } else {
                Map.put("msg", "Duplicate login user");
            }
        }
            Map.put("success", success);
            return Map;
    }




    @RequestMapping("/main")
    public ModelAndView Main() {
        return new ModelAndView("view/main");
    }

    @RequestMapping("/backup")
    public ModelAndView MainBackup() {
        return new ModelAndView("view/backup");
    }

    @RequestMapping("/tollmain")
    public ModelAndView Toll() {
        return new ModelAndView("view/tollmain");
    }

    @RequestMapping("/tollbackup")
    public ModelAndView TollBackup() {
        return new ModelAndView("view/tollbackup");
    }



    @RequestMapping(value = "/logout")
    @ResponseBody
    public Map<String, Object> LogOut(HttpSession session, HttpServletRequest request, HttpServletResponse response) {
        Map<String, Object> Map = new HashMap<>();
        try {
            if (session.getAttribute("userid") != null) {
                webSessionListener.removeSession(request);
            }
            Map.put("success", true);
            Map.put("msg", "logout");
            String contextPath = request.getContextPath();
            response.sendRedirect(contextPath + "/login");

        } catch (Exception e) {
            Map.put("success", false);
            Map.put("msg", e.getMessage());
        }

        return Map;
    }
}
