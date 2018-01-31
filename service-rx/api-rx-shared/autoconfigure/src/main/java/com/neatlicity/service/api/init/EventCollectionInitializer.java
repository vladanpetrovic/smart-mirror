package com.neatlicity.service.api.init;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.CollectionOptions;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.lang.reflect.ParameterizedType;

@RequiredArgsConstructor
public class EventCollectionInitializer<T> implements ApplicationRunner {

    private final @NonNull  MongoTemplate mongoTemplate;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(getParameterizedTypeClass())) {
            mongoTemplate.createCollection(getParameterizedTypeClass(), CollectionOptions.empty().capped().size(100000L));
        }
    }

    private Class<T> getParameterizedTypeClass() {
        return (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
    }
}