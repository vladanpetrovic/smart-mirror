package com.neatlicity.service.api.weather;

import com.neatlicity.service.api.weather.integration.json.OpenWeatherJson;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiWeatherApplicationIT {

    @Autowired
    TestRestTemplate rest;

    @Test
    public void contextLoads() {
        OpenWeatherJson weatherJson = this.rest.getForObject("/current", OpenWeatherJson.class);
        assertNotNull(weatherJson);
        assertNotNull(weatherJson.getMain());
        assertEquals(weatherJson.getName(), "Dorćol (historical)");
    }
}
