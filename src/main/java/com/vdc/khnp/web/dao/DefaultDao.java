package com.vdc.khnp.web.dao;

import com.vdc.khnp.common.dao.AbstractDAO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import jakarta.annotation.Resource;
import java.util.List;
import java.util.Map;

@Repository("defaultDao")
public class DefaultDao extends AbstractDAO {
    @Resource(name="sqlSessionMain")
    private SqlSessionTemplate sqlSession;

    public Map<String, Object> login_proc(Map<String, Object> map) {
        return (Map<String, Object>) selectOne(sqlSession, "Login.login_proc", map);
    }
}
