package com.neatlicity.service.api.todo.rx.web;

import com.neatlicity.service.api.todo.rx.data.ToDo;
import com.neatlicity.service.api.todo.rx.data.ToDoRxRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class ToDoRxController {
    private final @NonNull ToDoRxRepository toDoRxRepository;

    @GetMapping(value = "/api/rx/todo", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    Flux<ToDo> getAll(){
        return toDoRxRepository.findBy().share();
    }

    @PostMapping("/api/rx/todo")
    public Mono<ToDo> create(@Valid @RequestBody ToDo todo) {
        return toDoRxRepository.save(todo);
    }

    @GetMapping("/api/rx/todo/create")
    public Mono<ToDo> create() {
        ToDo todo = new ToDo();
        todo.setTitle("testa!!!");
        return toDoRxRepository.save(todo);
    }
}
