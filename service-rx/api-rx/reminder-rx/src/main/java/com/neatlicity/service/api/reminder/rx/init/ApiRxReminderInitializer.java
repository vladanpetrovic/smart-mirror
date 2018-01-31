package com.neatlicity.service.api.reminder.rx.init;

import com.neatlicity.service.api.init.EventCollectionInitializer;
import com.neatlicity.service.api.reminder.data.ReminderEvent;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class ApiRxReminderInitializer extends EventCollectionInitializer<ReminderEvent> {

    public ApiRxReminderInitializer(MongoTemplate mongoTemplate) {
        super(mongoTemplate);
    }
}