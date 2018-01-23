package com.neatlicity.service.api.todo.rx.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
@EnableWebFlux
public class WebFluxConfig implements WebFluxConfigurer {

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

//    @Autowired private ToDoEventRepository toDoEventRepository;
//    @Autowired private ObjectMapper objectMapper;
//
//    @Bean
//    WebSocketHandlerAdapter wsha() { return new WebSocketHandlerAdapter();}
//
//    @Bean
//    HandlerMapping hm() {
//        Map<String, WebSocketHandler> urlMap = new HashMap<>();
//        urlMap.put("ws/todos", wsh());
//
//        SimpleUrlHandlerMapping suhm = new SimpleUrlHandlerMapping();
//        suhm.setOrder(10);
//        suhm.setUrlMap(urlMap);
//        return suhm;
//    }
//
//    @Bean
//    WebSocketHandler wsh() {
//        return session -> {
//            Flux<WebSocketMessage> producer = null;
//                    toDoEventRepository.findByUserId('')
//                            .map(it -> {
//                                try {
//                                    return objectMapper.writeValueAsString(it);
//                                } catch (JsonProcessingException e) {
//                                    e.printStackTrace();
//                                }
//                                return "";
//                            }).map(session::textMessage);
//            return session.send(producer);
//        };
//    }
}
