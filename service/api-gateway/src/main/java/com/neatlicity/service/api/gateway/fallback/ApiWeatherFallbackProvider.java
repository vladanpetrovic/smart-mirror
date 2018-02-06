package com.neatlicity.service.api.gateway.fallback;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;

public class ApiWeatherFallbackProvider extends FallbackBaseProvider {

    @Override
    public String getRoute() {
        return "api-weather";
    }

    @Override
    ClientHttpResponse response(HttpStatus status) {
        return new ClientHttpJsonResponse(status,
                "{\"message\": \"Weather API is down\"}");
    }
}
