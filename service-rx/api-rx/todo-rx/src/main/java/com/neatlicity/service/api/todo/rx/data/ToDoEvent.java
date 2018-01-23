package com.neatlicity.service.api.todo.rx.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="todo-events")
public class ToDoEvent {

    @Id
    private String id;
    private ToDoEventType eventType;
    private ToDo toDo;
    private String userId;
}
