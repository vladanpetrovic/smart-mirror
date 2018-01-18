package com.neatlicity.service.api.todo.rx.web;

import com.neatlicity.service.api.todo.rx.data.ToDoEvent;
import com.neatlicity.service.api.todo.rx.data.ToDoEventRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/rx/todo-event")
@RequiredArgsConstructor
public class ToDoRxController {
    private final @NonNull ToDoEventRepository toDoEventRxRepository;

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ToDoEvent> stream(){
        return toDoEventRxRepository.findBy();
    }

    @PostMapping("/")
    public Mono<ToDoEvent> create(@Valid @RequestBody ToDoEvent toDoEvent) {
        return toDoEventRxRepository.save(toDoEvent);
    }
}
