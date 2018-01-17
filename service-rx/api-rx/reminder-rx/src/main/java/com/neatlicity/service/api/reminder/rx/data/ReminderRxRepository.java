package com.neatlicity.service.api.reminder.rx.data;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ReminderRxRepository extends ReactiveMongoRepository<Reminder, String> {
}
