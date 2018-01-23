package com.neatlicity.service.api.reminder.web;

import com.neatlicity.service.api.reminder.data.Reminder;
import com.neatlicity.service.api.reminder.data.ReminderRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.QueryParam;
import java.util.List;

@RestController
@RequestMapping("/filter")
@RequiredArgsConstructor
public class ReminderController {

    private final @NonNull
    ReminderRepository reminderRepository;

    @GetMapping("/getByUserIdAndForToday")
    public List<Reminder> getByUserIdAndForToday(@QueryParam("userId") String userId) {
        return reminderRepository.getByUserIdAndForToday(userId);
    }

    @GetMapping("/getByUserIdAndForTomorrow")
    public List<Reminder> getByUserIdAndForTomorrow(@QueryParam("userId") String userId) {
        return reminderRepository.getByUserIdAndForTomorrow(userId);
    }

    @GetMapping("/getByUserIdAndInPast")
    public List<Reminder> getByUserIdAndInPast(@QueryParam("userId") String userId) {
        return reminderRepository.getByUserIdAndInPast(userId);
    }

    @GetMapping("/getByUserIdAndInFuture")
    public List<Reminder> getByUserIdAndInFuture(@QueryParam("userId") String userId) {
        return reminderRepository.getByUserIdAndInFuture(userId);
    }
}
