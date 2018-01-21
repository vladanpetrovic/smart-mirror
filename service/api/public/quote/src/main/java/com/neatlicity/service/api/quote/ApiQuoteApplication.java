package com.neatlicity.service.api.quote;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiQuoteApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiQuoteApplication.class, args);
    }
}
