package com.neatlicity.service.api.reminder.rx.data;

import com.neatlicity.service.api.reminder.data.ReminderEvent;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import reactor.core.publisher.Flux;

public interface ReminderEventRxRepository extends ReactiveMongoRepository<ReminderEvent, String> {

    @Tailable
    Flux<ReminderEvent> findByUserId(String userId);
}
