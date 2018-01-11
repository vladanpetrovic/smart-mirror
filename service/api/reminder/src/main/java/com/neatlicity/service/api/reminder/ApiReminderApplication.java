package com.neatlicity.service.api.reminder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiReminderApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiReminderApplication.class, args);
    }
}
