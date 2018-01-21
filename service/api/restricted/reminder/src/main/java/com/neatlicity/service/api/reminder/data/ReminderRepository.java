package com.neatlicity.service.api.reminder.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "reminders", path = "reminders")
public interface ReminderRepository extends MongoRepository<Reminder, String> {
}
