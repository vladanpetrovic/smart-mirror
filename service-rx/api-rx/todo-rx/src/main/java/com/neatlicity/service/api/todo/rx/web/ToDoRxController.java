package com.neatlicity.service.api.todo.rx.web;

import com.neatlicity.service.api.todo.data.ToDoEvent;
import com.neatlicity.service.api.todo.rx.data.ToDoEventRxRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/event")
@RequiredArgsConstructor
public class ToDoRxController {
    private final @NonNull ToDoEventRxRepository toDoEventRxRepository;

    @GetMapping(value = "/stream/byUserId/{userId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ToDoEvent> stream(@PathVariable("userId")String userId){
        return toDoEventRxRepository.findByUserId(userId);
    }
}
