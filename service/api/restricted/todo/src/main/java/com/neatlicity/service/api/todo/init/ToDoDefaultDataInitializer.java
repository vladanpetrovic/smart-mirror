package com.neatlicity.service.api.todo.init;

import com.neatlicity.service.api.todo.data.ToDo;
import com.neatlicity.service.api.todo.data.ToDoCategory;
import com.neatlicity.service.api.todo.data.ToDoRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class ToDoDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull MongoTemplate mongoTemplate;
    private final @NonNull ToDoRepository toDoRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(ToDo.class)) {
            mongoTemplate.createCollection(ToDo.class);

            toDoRepository.save(ToDo.builder()
                    .title("Make your bed")
                    .category(ToDoCategory.HOME)
                    .dateTime(LocalDateTime.now())
                    .build());
            toDoRepository.save(ToDo.builder()
                    .title("Develop neatlicity clients and services")
                    .category(ToDoCategory.WORK)
                    .dateTime(LocalDateTime.now())
                    .build());
        }
    }
}
