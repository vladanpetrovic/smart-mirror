package com.neatlicity.service.api.todo.data;

import com.neatlicity.service.api.todo.integration.EventType;
import com.neatlicity.service.api.todo.integration.ToDoEventJson;
import com.neatlicity.service.api.todo.integration.ToDoRxApiClient;
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
    ToDoRxApiClient toDoRxApiClient;

    @HandleAfterCreate
    public void onAfterCreate(ToDo toDo) {
        log.info("TODO AFTER CREATE " + toDo);
        toDoRxApiClient.createEvent(
                ToDoEventJson
                        .builder()
                        .toDo(toDo)
                        .eventType(EventType.CREATED)
                        .build());
    }

    @HandleAfterSave
    public void onAfterSave(ToDo toDo) {
        log.info("TODO AFTER SAVE " + toDo);
        toDoRxApiClient.createEvent(
                ToDoEventJson
                        .builder()
                        .toDo(toDo)
                        .eventType(EventType.UPDATED)
                        .build());
    }

    @HandleAfterDelete
    public void onAfterDelete(ToDo toDo) {
        log.info("TODO AFTER DELETE " + toDo);
        toDoRxApiClient.createEvent(
                ToDoEventJson
                        .builder()
                        .toDo(toDo)
                        .eventType(EventType.DELETED)
                        .build());
    }
}
