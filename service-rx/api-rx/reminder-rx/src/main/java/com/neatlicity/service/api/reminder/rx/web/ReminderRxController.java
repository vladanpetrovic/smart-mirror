package com.neatlicity.service.api.reminder.rx.web;

import com.neatlicity.service.api.reminder.rx.data.ReminderEvent;
import com.neatlicity.service.api.reminder.rx.data.ReminderEventRxRepository;
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
public class ReminderRxController {
    private final @NonNull ReminderEventRxRepository reminderEventRxRepository;

    @GetMapping(value = "/stream/byUserId/{userId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ReminderEvent> stream(@PathVariable("userId") String userId) {
        return reminderEventRxRepository.findByUserId(userId);
    }
}
