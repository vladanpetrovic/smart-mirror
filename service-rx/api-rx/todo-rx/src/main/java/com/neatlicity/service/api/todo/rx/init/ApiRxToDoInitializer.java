package com.neatlicity.service.api.todo.rx.init;

import com.neatlicity.service.api.init.EventCollectionInitializer;
import com.neatlicity.service.api.todo.data.ToDoEvent;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class ApiRxToDoInitializer extends EventCollectionInitializer<ToDoEvent> {

    public ApiRxToDoInitializer(MongoTemplate mongoTemplate) {
        super(mongoTemplate);
    }
}