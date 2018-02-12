package com.neatlicity.service.api.reminder.rx.init;

import com.neatlicity.service.api.reminder.data.Reminder;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.CollectionOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ApiRxReminderInitializer implements ApplicationRunner {

    private final @NonNull
    MongoTemplate mongoTemplate;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(Reminder.class)) {
            mongoTemplate.createCollection(Reminder.class, CollectionOptions.empty().capped().size(100000L));
        }
    }
}