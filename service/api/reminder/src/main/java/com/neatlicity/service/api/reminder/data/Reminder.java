package com.neatlicity.service.api.reminder.data;

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
@Document(collection="reminders")
public class Reminder {

    @Id
    private String id;

    private String title;
    private LocalDateTime dateTime;
    private Integer category;
    private String userId;
}
