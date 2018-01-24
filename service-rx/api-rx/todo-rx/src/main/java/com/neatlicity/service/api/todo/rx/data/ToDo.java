package com.neatlicity.service.api.todo.rx.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToDo {

    private String id;
    private String title;
    private LocalDateTime dateTime;
    private String category;
    private boolean done;
    private String userId;
}
