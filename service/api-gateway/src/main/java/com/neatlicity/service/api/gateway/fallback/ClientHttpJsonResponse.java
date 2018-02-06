package com.neatlicity.service.api.gateway.fallback;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

@RequiredArgsConstructor
public class ClientHttpJsonResponse implements ClientHttpResponse {

    private final @NonNull HttpStatus status;
    private final @NonNull String body;

    @Override
    public HttpStatus getStatusCode() throws IOException {
        return this.status;
    }

    @Override
    public int getRawStatusCode() throws IOException {
        return this.status.value();
    }

    @Override
    public String getStatusText() throws IOException {
        return this.status.getReasonPhrase();
    }

    @Override
    public void close() {
    }

    @Override
    public InputStream getBody() throws IOException {
        return new ByteArrayInputStream(this.body.getBytes());
    }

    @Override
    public HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }
}
