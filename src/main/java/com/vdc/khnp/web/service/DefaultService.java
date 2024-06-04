package com.vdc.khnp.web.service;

import com.vdc.khnp.web.dao.DefaultDao;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import java.util.Map;

@Service("defaultService")
public class DefaultService {

    @Resource(name="defaultDao")
    private DefaultDao defaultDao;


    public Map<String, Object> login_proc(Map<String, Object> map) throws Exception {
        return defaultDao.login_proc(map);
    }
}
