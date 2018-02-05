package com.neatlicity.service.api.todo.data;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ToDoEventRepository extends MongoRepository<ToDoEvent, String> {

}
