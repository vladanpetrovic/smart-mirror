package com.neatlicity.service.api.gateway.fallback;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;

public class ApiToDoFallbackProvider extends FallbackBaseProvider {

    @Override
    public String getRoute() {
        return "api-todo";
    }

    @Override
    ClientHttpResponse response(HttpStatus status) {
        return new ClientHttpJsonResponse(status,
                "{\"message\": \"ToDo API is down\"}");
    }
}
