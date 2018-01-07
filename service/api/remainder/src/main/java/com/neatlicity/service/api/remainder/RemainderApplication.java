package com.neatlicity.service.api.remainder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.sleuth.Sampler;
import org.springframework.cloud.sleuth.sampler.AlwaysSampler;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class RemainderApplication {

    public static void main(String[] args) {
        SpringApplication.run(RemainderApplication.class, args);
    }

    @Bean
    public Sampler getSampler() {
        return new AlwaysSampler();
    }
}
