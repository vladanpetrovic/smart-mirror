package com.neatlicity.service.api.quote;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiQuoteApplicationTests {

    @Autowired
    TestRestTemplate rest;

    @Test
    public void contextLoads() {
        String response = this.rest.getForObject("/of-the-day", String.class);
        assertNotNull(response);
    }

}
