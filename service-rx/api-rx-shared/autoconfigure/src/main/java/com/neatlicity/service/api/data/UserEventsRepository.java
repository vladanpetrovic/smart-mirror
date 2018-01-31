package com.neatlicity.service.api.data;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import reactor.core.publisher.Flux;

public interface UserEventsRepository<T> extends ReactiveMongoRepository<T, String> {

    @Tailable
    Flux<T> findByUserId(String userId);
}