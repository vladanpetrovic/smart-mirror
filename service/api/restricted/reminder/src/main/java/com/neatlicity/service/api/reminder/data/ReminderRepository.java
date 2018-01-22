package com.neatlicity.service.api.reminder.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "reminders", path = "reminders")
public interface ReminderRepository extends MongoRepository<Reminder, String> {

    List<Reminder> findByUserId(@Param("userId") String userId);
}
