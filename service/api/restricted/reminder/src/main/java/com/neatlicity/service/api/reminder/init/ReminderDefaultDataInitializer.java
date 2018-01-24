package com.neatlicity.service.api.reminder.init;

import com.neatlicity.service.api.reminder.data.Reminder;
import com.neatlicity.service.api.reminder.data.ReminderCategory;
import com.neatlicity.service.api.reminder.data.ReminderRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class ReminderDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull MongoTemplate mongoTemplate;
    private final @NonNull ReminderRepository reminderRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(Reminder.class)) {
            mongoTemplate.createCollection(Reminder.class);

            Reminder reminder = Reminder.builder()
                    .title("Go to sleep")
                    .category(ReminderCategory.NOTICE)
                    .dateTime(LocalDateTime.now())
                    .build();
            reminderRepository.save(reminder);
        }
    }
}
