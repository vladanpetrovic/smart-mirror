package com.neatlicity.service.api.reminder.rx.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reminder {

    private String id;
    private String title;
    private LocalDateTime dateTime;
    private String category;
    private String userId;
}
