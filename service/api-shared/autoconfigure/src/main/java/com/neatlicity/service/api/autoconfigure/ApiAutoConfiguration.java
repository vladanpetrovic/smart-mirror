package com.neatlicity.service.api.autoconfigure;

import org.springframework.cloud.sleuth.Sampler;
import org.springframework.cloud.sleuth.sampler.AlwaysSampler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiAutoConfiguration {

    @Bean
    public Sampler getSampler() {
        return new AlwaysSampler();
    }
}
