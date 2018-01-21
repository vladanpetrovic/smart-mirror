package com.neatlicity.service.api.todo.integration;

import com.neatlicity.service.api.todo.data.ToDo;
import com.neatlicity.service.api.todo.integration.EventType;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter @Setter
public class ToDoEventJson {

    private EventType eventType;
    private ToDo toDo;
}
