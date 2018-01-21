package com.neatlicity.service.api.reminder.integration;

import com.neatlicity.service.api.reminder.data.Reminder;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class ReminderEventJson {

    private EventType eventType;
    private Reminder reminder;
}
