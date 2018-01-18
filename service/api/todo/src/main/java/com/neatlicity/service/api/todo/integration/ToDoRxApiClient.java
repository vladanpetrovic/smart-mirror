package com.neatlicity.service.api.todo.integration;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient("api-todo-rx")
public interface ToDoRxApiClient {

    @PostMapping("/api/rx/todo-event/")
    void createEvent(ToDoEventJson toDoEvent);
}
