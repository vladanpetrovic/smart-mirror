package com.neatlicity.service.api.todo.data;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@Document(collection="todos")
public class ToDo {

    @Id
    private String id;

    private String title;
    private LocalDateTime dateTime;
    private Integer category;
    private boolean done;
    private String userId;
}
