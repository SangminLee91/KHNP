package com.vdc.khnp.configuration;

import com.vdc.khnp.common.interceptor.LoggerInterceptor;
import com.vdc.khnp.common.interceptor.SessionInterceptor;
import com.vdc.khnp.common.resolver.ArgumentResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    //Interceptor
    @Bean
    public SessionInterceptor sessionInterceptor() { return new SessionInterceptor(); }

    @Bean
    public LoggerInterceptor loggerInterceptor() { return new LoggerInterceptor(); }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(sessionInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/excel/**", "/assets/**")
                .excludePathPatterns("/", "/login", "/login/proc", "/logout", "/api/**");

        registry.addInterceptor(loggerInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/assets/**","/api/**", "/login");

    }

    //parameter Resolver
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(new ArgumentResolver());
    }

    //index Page
    @Override
    public void addViewControllers(ViewControllerRegistry registry){
        registry.addRedirectViewController("/", "login");
    }

}
