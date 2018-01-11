package com.neatlicity.service.api.todo.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface ToDoRepository extends MongoRepository<ToDo, String> {
}
