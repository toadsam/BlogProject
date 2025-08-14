package com.jiraynor.board_back.config;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.jiraynor.board_back.filter.JwtAuthenticationFilter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    protected SecurityFilterChain configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
            // CORS 기본 허용(필요 시 별도 설정 Bean 추가 가능)
            .cors(cors -> {})
            // CSRF 비활성화 (JWT 사용 시 보통 비활성화)
            .csrf(csrf -> csrf.disable())
            // 기본 로그인 폼/HTTP Basic 비활성화
            .httpBasic(basic -> basic.disable())
            // 세션을 쓰지 않는다 (JWT 방식)
            .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            // 요청 인가 규칙
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/api/v1/board/**", "/api/v1/search/**", "file/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/v1/board/**", "/api/v1/user/*").permitAll()
                .anyRequest().authenticated()
            )
            // 인증 실패(인증 안 된 사용자가 보호 리소스 접근) 응답 처리
            .exceptionHandling(ex -> ex.authenticationEntryPoint(new FailedAuthenticationEntryPoint()));

        // UsernamePasswordAuthenticationFilter 전에 JWT 필터 투입
        httpSecurity.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }
}

/**
 * 인증되지 않은 사용자가 보호 리소스에 접근할 때의 응답 형식 정의
 */
class FailedAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException authException
    ) throws IOException, ServletException {

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN); // 403
        response.getWriter().write("{\"code\":\"NP\",\"message\":\"Do not have permission.\"}");
    }
}
