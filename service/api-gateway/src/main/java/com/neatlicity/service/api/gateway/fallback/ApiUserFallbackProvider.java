package com.neatlicity.service.api.gateway.fallback;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;

public class ApiUserFallbackProvider extends FallbackBaseProvider {

    @Override
    public String getRoute() {
        return "api-user";
    }

    @Override
    ClientHttpResponse response(HttpStatus status) {
        return new ClientHttpJsonResponse(status,
                "{\"message\": \"User API is down\"}");
    }
}
