package com.neatlicity.service.api.gateway.fallback;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;

public class ApiReminderFallbackProvider extends FallbackBaseProvider {

    @Override
    public String getRoute() {
        return "api-reminder";
    }

    @Override
    ClientHttpResponse response(HttpStatus status) {
        return new ClientHttpJsonResponse(status,
                "{\"message\": \"Reminder API is down\"}");
    }
}
