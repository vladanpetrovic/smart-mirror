package com.neatlicity.service.api.reminder.rx.web;

import com.neatlicity.service.api.reminder.rx.data.Reminder;
import com.neatlicity.service.api.reminder.rx.data.ReminderRxRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequiredArgsConstructor
public class ReminderRxController {
    private final @NonNull ReminderRxRepository reminderRxRepository;

    @GetMapping("/api/rx/reminder")
    Flux<Reminder> getAll(){
        return reminderRxRepository.findAll();
    }
}
