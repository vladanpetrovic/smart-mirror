package com.neatlicity.service.api.reminder.rx.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reminder {

    private String id;
    private String title;
    private Date dateTime;
    private String category;
    private String userId;
}
