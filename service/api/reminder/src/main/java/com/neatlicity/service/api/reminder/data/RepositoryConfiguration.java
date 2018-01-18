package com.neatlicity.service.api.reminder.data;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfiguration {

    @Bean
    ReminderChangeEventHandler reminderChangeEventHandler() {
        return new ReminderChangeEventHandler();
    }
}
