package com.neatlicity.service.api.reminder.data;

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
@Document(collection="reminder-events")
public class ReminderEvent {

    @Id
    private String id;
    private ReminderEventType eventType;
    private Reminder reminder;
    private String userId;
}
