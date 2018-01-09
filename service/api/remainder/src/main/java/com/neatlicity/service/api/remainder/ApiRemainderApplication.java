package com.neatlicity.service.api.remainder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiRemainderApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiRemainderApplication.class, args);
    }
}
