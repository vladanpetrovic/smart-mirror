package com.neatlicity.service.api.reminder.rx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@EnableReactiveMongoRepositories
@EnableDiscoveryClient
public class ApiRxReminderApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiRxReminderApplication.class, args);
    }
}
