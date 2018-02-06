package com.neatlicity.service.api.gateway.config;

import com.neatlicity.service.api.gateway.fallback.*;
import org.springframework.cloud.netflix.zuul.filters.route.FallbackProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HystrixFallbackConfiguration {

    @Bean
    public FallbackProvider apiDeviceFallbackProvider() {
        return new ApiDeviceFallbackProvider();
    }

    @Bean
    public FallbackProvider apiQuoteFallbackProvider() {
        return new ApiQuoteFallbackProvider();
    }

    @Bean
    public FallbackProvider apiToDoFallbackProvider() {
        return new ApiToDoFallbackProvider();
    }

    @Bean
    public FallbackProvider apiReminderFallbackProvider() {
        return new ApiReminderFallbackProvider();
    }

    @Bean
    public FallbackProvider apiUserFallbackProvider() {
        return new ApiUserFallbackProvider();
    }

    @Bean
    public FallbackProvider apiWeatherFallbackProvider() {
        return new ApiWeatherFallbackProvider();
    }
}
