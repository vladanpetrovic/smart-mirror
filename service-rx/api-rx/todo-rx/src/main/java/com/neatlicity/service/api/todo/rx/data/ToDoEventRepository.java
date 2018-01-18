package com.neatlicity.service.api.todo.rx.data;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import reactor.core.publisher.Flux;

public interface ToDoEventRepository extends ReactiveMongoRepository<ToDoEvent, String> {

    @Tailable
    Flux<ToDoEvent> findBy();
}
