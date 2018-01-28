package com.neatlicity.service.api.todo.rx.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ToDo {

    private String id;
    private String title;
    private Date dateTime;
    private String category;
    private boolean done;
    private String userId;
}
