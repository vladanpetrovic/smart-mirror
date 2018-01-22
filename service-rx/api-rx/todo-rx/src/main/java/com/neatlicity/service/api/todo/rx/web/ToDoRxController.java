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
@RequestMapping("/event")
@RequiredArgsConstructor
public class ToDoRxController {
    private final @NonNull ToDoEventRepository toDoEventRxRepository;

    @GetMapping(value = "/stream/byUserId/{userId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ToDoEvent> stream(@PathVariable("userId")String userId){
        return toDoEventRxRepository.findByUserId(userId);
    }

    @PostMapping("/")
    public Mono<ToDoEvent> create(@Valid @RequestBody ToDoEvent toDoEvent) {
        return toDoEventRxRepository.save(toDoEvent);
    }
}
