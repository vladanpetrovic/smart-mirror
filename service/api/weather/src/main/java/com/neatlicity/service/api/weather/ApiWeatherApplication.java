package com.neatlicity.service.api.weather;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiWeatherApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiWeatherApplication.class, args);
    }
}
