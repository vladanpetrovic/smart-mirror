package com.neatlicity.service.api.todo.data;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterDelete;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@Slf4j
@RepositoryEventHandler(ToDo.class)
public class ToDoChangeEventHandler {

    @Autowired
    ToDoEventRepository toDoEventRepository;

    @HandleAfterCreate
    public void onAfterCreate(ToDo toDo) {
        log.info("TODO AFTER CREATE " + toDo);
        toDoEventRepository.save(
                ToDoEvent.builder()
                        .toDo(toDo)
                        .eventType(ToDoEventType.CREATED)
                        .userId(toDo.getUserId())
                        .build());
    }

    @HandleAfterSave
    public void onAfterSave(ToDo toDo) {
        log.info("TODO AFTER SAVE " + toDo);
        toDoEventRepository.save(
                ToDoEvent.builder()
                        .toDo(toDo)
                        .eventType(ToDoEventType.UPDATED)
                        .userId(toDo.getUserId())
                        .build());
    }

    @HandleAfterDelete
    public void onAfterDelete(ToDo toDo) {
        log.info("TODO AFTER DELETE " + toDo);
        toDoEventRepository.save(
                ToDoEvent.builder()
                        .toDo(toDo)
                        .eventType(ToDoEventType.DELETED)
                        .userId(toDo.getUserId())
                        .build());
    }
}
