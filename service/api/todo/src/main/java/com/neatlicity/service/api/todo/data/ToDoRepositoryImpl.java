package com.neatlicity.service.api.todo.data;

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
public class ToDoRepositoryImpl implements ToDoRepositoryCustom {

    private final @NonNull MongoTemplate mongoTemplate;

    @Override
    public List<ToDo> getByUserIdAndForToday(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("userId").is(userId)
                .and("dateTime")
                .gte(Date.from(LocalDate.now().atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()))
                .lte(Date.from(LocalDate.now().plusDays(1)
                        .atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, ToDo.class);
    }

    @Override
    public List<ToDo> getByUserIdAndInPast(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("userId").is(userId)
                .and("dateTime")
                .lte(Date.from(LocalDate.now().atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, ToDo.class);
    }

    @Override
    public List<ToDo> getByUserIdAndInFuture(String userId) {
        Criteria publishedDateCriteria = Criteria
                .where("userId").is(userId)
                .and("dateTime")
                .gte(Date.from(LocalDate.now().plusDays(2)
                        .atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()));
        Query query = new Query(publishedDateCriteria);
        return mongoTemplate.find(query, ToDo.class);
    }
}
