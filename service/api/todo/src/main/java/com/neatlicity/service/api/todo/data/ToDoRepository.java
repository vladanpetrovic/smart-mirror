package com.neatlicity.service.api.todo.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface ToDoRepository extends MongoRepository<ToDo, String>, ToDoRepositoryCustom {

    List<ToDo> findByUserId(@Param("userId") String userId);

}
