package com.vdc.khnp.common.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import jakarta.annotation.Resource;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SessionInterceptor implements HandlerInterceptor {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    //Controller 접근전
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        HttpSession session = request.getSession();

        //Session 확인
        if (!hasSessionInfo(session)) {

            //Ajax 호출의경우 SendError 코드 전송
            if ("XMLHttpRequest".equals(request.getHeader("x-requested-with"))) {
                response.sendError(901);
            } else {

                //보안을 위해 이전 Jseesionid를 삭제한다.
                Cookie myCookie = new Cookie("JSESSIONID", null);
                myCookie.setMaxAge(0); // 쿠키의 expiration 타임을 0으로 하여 없앤다.
                myCookie.setPath("/"); // 모든 경로에서 삭제 됬음을 알린다.
                response.addCookie(myCookie);

                response.sendRedirect(request.getContextPath() + "/login");
            }
            return false;
        }

        return true;
    }

    //Controller 접근후
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

        if(modelAndView == null) return;

        //페이지 호출의경우 세션정보를 Model에 넣는다.
        if (!"XMLHttpRequest".equals(request.getHeader("x-requested-with"))) {
            HttpSession session = request.getSession();

            Map<String, String> map = new HashMap<>();
            map.put("userid", session.getAttribute("userid").toString());
            modelAndView.addObject("User", map);

        }
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object object, Exception arg3) throws Exception {
    }

    private boolean hasSessionInfo(HttpSession session)
    {
        return (session.getAttribute("userid") != null);
    }


}
