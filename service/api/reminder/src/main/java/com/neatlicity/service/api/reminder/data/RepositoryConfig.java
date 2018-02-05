package com.neatlicity.service.api.reminder.data;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfig {

    @Bean
    ReminderChangeEventHandler reminderChangeEventHandler() {
        return new ReminderChangeEventHandler();
    }
}
