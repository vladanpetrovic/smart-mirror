package com.neatlicity.service.api.gateway.fallback;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;

public class ApiDeviceFallbackProvider extends FallbackBaseProvider {

    @Override
    public String getRoute() {
        return "api-device";
    }

    @Override
    ClientHttpResponse response(HttpStatus status) {
        return new ClientHttpJsonResponse(status,
                "{\"message\": \"Device API is down\"}");
    }
}
