package com.neatlicity.service.api.reminder.data;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReminderEventRepository extends MongoRepository<ReminderEvent, String> {

}
