package com.neatlicity.service.api.photo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiPhotoApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiPhotoApplication.class, args);
    }

}
