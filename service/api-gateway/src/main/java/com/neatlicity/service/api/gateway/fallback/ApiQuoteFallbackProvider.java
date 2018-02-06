package com.neatlicity.service.api.gateway.fallback;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;

public class ApiQuoteFallbackProvider extends FallbackBaseProvider {

    @Override
    public String getRoute() {
        return "api-quote";
    }

    @Override
    ClientHttpResponse response(HttpStatus status) {
        return new ClientHttpJsonResponse(status,
                "{\"message\": \"Quote API is down\"}");
    }
}
