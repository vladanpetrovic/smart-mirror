package com.neatlicity.service.api.todo.data;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfig {

    @Bean
    ToDoChangeEventHandler toDoChangeEventHandler() {
        return new ToDoChangeEventHandler();
    }
}
