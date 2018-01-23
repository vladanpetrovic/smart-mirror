package com.neatlicity.service.api.reminder.data;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@Slf4j
@RepositoryEventHandler(Reminder.class)
public class ReminderChangeEventHandler {

    @Autowired ReminderEventRepository reminderEventRepository;

    @HandleAfterCreate
    public void onAfterCreate(Reminder reminder) {
        log.info("REMINDER AFTER CREATE " + reminder);
        reminderEventRepository.save(
                ReminderEvent.builder()
                        .reminder(reminder)
                        .eventType(ReminderEventType.CREATED)
                        .userId(reminder.getUserId())
                        .build());
    }

    @HandleAfterSave
    public void onAfterSave(Reminder reminder) {
        log.info("REMINDER AFTER SAVE " + reminder);
        reminderEventRepository.save(
                ReminderEvent.builder()
                        .reminder(reminder)
                        .eventType(ReminderEventType.UPDATED)
                        .userId(reminder.getUserId())
                        .build());
    }

    @HandleAfterDelete
    public void onAfterDelete(Reminder reminder) {
        log.info("REMINDER AFTER DELETE " + reminder);
        reminderEventRepository.save(
                ReminderEvent.builder()
                        .reminder(reminder)
                        .eventType(ReminderEventType.DELETED)
                        .userId(reminder.getUserId())
                        .build());
    }
}
