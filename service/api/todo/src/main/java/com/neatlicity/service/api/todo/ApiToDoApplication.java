package com.neatlicity.service.api.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiToDoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiToDoApplication.class, args);
    }
}
