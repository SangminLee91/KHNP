package com.vdc.khnp.common.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoggerInterceptor implements HandlerInterceptor {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (!"/ims/error".equals(request.getRequestURI())) {
            if (logger.isDebugEnabled()) {
                logger.debug("==================== BEGIN ====================");
                logger.debug("Request URI ===> " + request.getRequestURI());
            }
        }
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        if (!"/ims/error".equals(request.getRequestURI())) {
            if (logger.isDebugEnabled()) {
                logger.debug("==================== END ======================");
            }
        }
    }

}