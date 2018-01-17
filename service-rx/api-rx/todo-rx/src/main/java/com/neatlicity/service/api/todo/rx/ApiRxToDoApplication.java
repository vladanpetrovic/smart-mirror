package com.neatlicity.service.api.todo.rx;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neatlicity.service.api.todo.rx.data.ToDo;
import com.neatlicity.service.api.todo.rx.data.ToDoRxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.CollectionOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
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

@SpringBootApplication
@EnableReactiveMongoRepositories
@EnableDiscoveryClient
@EnableWebFlux
public class ApiRxToDoApplication implements WebFluxConfigurer { //, CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ApiRxToDoApplication.class, args);
    }

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

    @Bean
    WebSocketHandlerAdapter wsha() { return new WebSocketHandlerAdapter();}

    @Bean
    HandlerMapping hm() {
        Map<String, WebSocketHandler> urlMap = new HashMap<>();
        urlMap.put("todos", wsh());

        SimpleUrlHandlerMapping suhm = new SimpleUrlHandlerMapping();
        suhm.setOrder(10);
        suhm.setUrlMap(urlMap);
        return suhm;
    }

    @Autowired private ToDoRxRepository toDoRxRepository;
    @Autowired private ObjectMapper objectMapper;

    @Bean
    WebSocketHandler wsh() {
        return webSocketSession -> {

            Flux<WebSocketMessage> producer =
                toDoRxRepository.findBy()
                        .map(it -> {
                            try {
                                return objectMapper.writeValueAsString(it);
                            } catch (JsonProcessingException e) {
                                e.printStackTrace();
                            }
                            return "";
                        }).map(webSocketSession::textMessage);
            return webSocketSession.send(producer);
        };
    }


//    @Autowired
//    MongoTemplate template;
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        template.createCollection(ToDo.class, CollectionOptions.empty().capped().size(100000L));
//    }
}
