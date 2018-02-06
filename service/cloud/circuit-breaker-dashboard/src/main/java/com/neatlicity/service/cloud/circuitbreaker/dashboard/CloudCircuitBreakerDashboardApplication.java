package com.neatlicity.service.cloud.circuitbreaker.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;

@EnableHystrixDashboard
@EnableDiscoveryClient
@SpringBootApplication
public class CloudCircuitBreakerDashboardApplication {

    public static void main(String[] args) {
        SpringApplication.run(CloudCircuitBreakerDashboardApplication.class, args);
    }

}
