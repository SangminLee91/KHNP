package com.vdc.khnp.web.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository("socketDao")
public class SocketDao {
    @Autowired
    private SqlSession sqlSession;

    public void insertCommand(Map<String, Object> commandMap) {
        sqlSession.insert("Command.insertCommand", commandMap);
    }
}
