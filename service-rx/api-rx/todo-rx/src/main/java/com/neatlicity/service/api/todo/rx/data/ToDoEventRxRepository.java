package com.neatlicity.service.api.todo.rx.data;

import com.neatlicity.service.api.todo.data.ToDoEvent;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import reactor.core.publisher.Flux;

public interface ToDoEventRxRepository extends ReactiveMongoRepository<ToDoEvent, String> {

    @Tailable
    Flux<ToDoEvent> findByUserId(String userId);
}
