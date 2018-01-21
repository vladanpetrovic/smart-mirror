package com.neatlicity.service.api.reminder.integration;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient("api-reminder-rx")
public interface ReminderRxApiClient {

    @PostMapping("/event/")
    void createEvent(ReminderEventJson reminderEventJson);
}
