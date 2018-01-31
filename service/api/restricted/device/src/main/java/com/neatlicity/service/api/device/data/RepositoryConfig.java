package com.neatlicity.service.api.device.data;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RepositoryConfig {

    @Bean
    DeviceChangeEventHandler deviceChangeEventHandler() {
        return new DeviceChangeEventHandler();
    }
}
