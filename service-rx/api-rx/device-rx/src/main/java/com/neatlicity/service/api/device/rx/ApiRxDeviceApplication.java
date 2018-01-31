package com.neatlicity.service.api.device.rx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@EnableReactiveMongoRepositories
@EnableDiscoveryClient
public class ApiRxDeviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiRxDeviceApplication.class, args);
    }
}
