package com.neatlicity.service.api.todo.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="todos")
public class ToDo {

    @Id
    private String id;
    private String title;
    private LocalDateTime dateTime;
    private ToDoCategory category;
    private boolean done;
    private String userId;
}
