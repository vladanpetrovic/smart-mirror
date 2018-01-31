package com.neatlicity.service.api.reminder.rx.web;

import com.neatlicity.service.api.reminder.data.ReminderEvent;
import com.neatlicity.service.api.reminder.rx.data.ReminderEventRxRepository;
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
public class ReminderRxController {
    private final @NonNull ReminderEventRxRepository reminderEventRxRepository;

    @GetMapping(value = "/stream/byUserId/{userId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ReminderEvent> stream(@PathVariable("userId") String userId) {
        return reminderEventRxRepository.findByUserId(userId);
    }
}
