package com.neatlicity.service.api.reminder.data;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
public class ReminderRepositoryImpl implements ReminderRepositoryCustom {

    private final @NonNull MongoTemplate mongoTemplate;

    @Override
    public List<Reminder> getByUserIdAndForToday(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("dateTime")
                .gte(Date.from(LocalDate.now().atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()))
                .lte(Date.from(LocalDate.now().plusDays(1)
                        .atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, Reminder.class);
    }

    @Override
    public List<Reminder> getByUserIdAndForTomorrow(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("dateTime")
                .gte(Date.from(LocalDate.now().plusDays(1)
                        .atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()))
                .lte(Date.from(LocalDate.now().plusDays(2)
                        .atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, Reminder.class);
    }

    @Override
    public List<Reminder> getByUserIdAndInPast(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("dateTime")
                .lte(Date.from(LocalDate.now().atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, Reminder.class);
    }

    @Override
    public List<Reminder> getByUserIdAndInFuture(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("dateTime")
                .gte(Date.from(LocalDate.now().plusDays(2)
                        .atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, Reminder.class);
    }
}
