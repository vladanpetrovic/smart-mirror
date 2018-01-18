package com.neatlicity.service.api.reminder.data;

import com.neatlicity.service.api.reminder.integration.EventType;
import com.neatlicity.service.api.reminder.integration.ReminderEventJson;
import com.neatlicity.service.api.reminder.integration.ReminderRxApiClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@Slf4j
@RepositoryEventHandler(Reminder.class)
public class ReminderChangeEventHandler {

    @Autowired ReminderRxApiClient reminderRxApiClient;

    @HandleAfterCreate
    public void onAfterCreate(Reminder reminder) {
        log.info("REMINDER AFTER CREATE " + reminder);
        reminderRxApiClient.createEvent(
                ReminderEventJson
                        .builder()
                        .reminder(reminder)
                        .eventType(EventType.CREATED)
                        .build());
    }

    @HandleAfterSave
    public void onAfterSave(Reminder reminder) {
        log.info("REMINDER AFTER SAVE " + reminder);
        reminderRxApiClient.createEvent(
                ReminderEventJson
                        .builder()
                        .reminder(reminder)
                        .eventType(EventType.UPDATED)
                        .build());
    }

    @HandleAfterDelete
    public void onAfterDelete(Reminder reminder) {
        log.info("REMINDER AFTER DELETE " + reminder);
        reminderRxApiClient.createEvent(
                ReminderEventJson
                        .builder()
                        .reminder(reminder)
                        .eventType(EventType.DELETED)
                        .build());
    }
}
