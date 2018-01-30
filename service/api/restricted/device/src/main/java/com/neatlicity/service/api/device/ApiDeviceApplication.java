package com.neatlicity.service.api.device;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiDeviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiDeviceApplication.class, args);
    }

}
