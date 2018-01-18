package com.neatlicity.service.api.todo.rx.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neatlicity.service.api.todo.rx.data.ToDoEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;
import reactor.core.publisher.Flux;

import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableWebFlux
public class WebSocketConfig implements WebFluxConfigurer {

    @Autowired private ToDoEventRepository toDoEventRepository;
    @Autowired private ObjectMapper objectMapper;

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

    @Bean
    WebSocketHandlerAdapter wsha() { return new WebSocketHandlerAdapter();}

    @Bean
    HandlerMapping hm() {
        Map<String, WebSocketHandler> urlMap = new HashMap<>();
        urlMap.put("ws/todos", wsh());

        SimpleUrlHandlerMapping suhm = new SimpleUrlHandlerMapping();
        suhm.setOrder(10);
        suhm.setUrlMap(urlMap);
        return suhm;
    }

    @Bean
    WebSocketHandler wsh() {
        return session -> {
            Flux<WebSocketMessage> producer = null;
                    toDoEventRepository.findBy()
                            .map(it -> {
                                try {
                                    return objectMapper.writeValueAsString(it);
                                } catch (JsonProcessingException e) {
                                    e.printStackTrace();
                                }
                                return "";
                            }).map(session::textMessage);
            return session.send(producer);
        };
    }
}
