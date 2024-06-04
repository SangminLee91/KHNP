package com.vdc.khnp.web.service;

import com.vdc.khnp.web.dao.SocketDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service("socketService")
public class SocketService {

    @Autowired
    private SocketDao socketDao;

    public void insertCommand(Map<String, Object> commandMap) throws Exception {
        socketDao.insertCommand(commandMap);
    }
}
