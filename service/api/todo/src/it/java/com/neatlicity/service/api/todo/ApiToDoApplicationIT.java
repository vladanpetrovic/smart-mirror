package com.neatlicity.service.api.todo;

import com.github.tomakehurst.wiremock.junit.WireMockRule;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;

import static com.github.tomakehurst.wiremock.client.WireMock.get;
import static com.github.tomakehurst.wiremock.client.WireMock.okJson;
import static com.github.tomakehurst.wiremock.client.WireMock.stubFor;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiToDoApplicationIT {

    @Autowired
    TestRestTemplate rest;
    @Rule
    public WireMockRule wireMockRule = new WireMockRule();

    @Test
    public void contextLoads() {
        stubFor(get("/user").willReturn(okJson("{\"username\":\"john\",\"authorities\":[{\"authority\":\"ROLE_USER\"}]}")));

        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer xyz123");

        final ResponseEntity<String> dataResponse = this.rest.exchange("/todos", HttpMethod.GET, new HttpEntity<>(headers), String.class);
        assertEquals(dataResponse.getStatusCode(), HttpStatus.OK);
        assertTrue(dataResponse.getBody().contains("Make your bed"));
        assertTrue(dataResponse.getBody().contains("Develop neatlicity clients and services"));
    }
}
