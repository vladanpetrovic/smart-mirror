package com.neatlicity.service.api.weather;

import com.neatlicity.service.api.weather.integration.OpenWeatherApiClient;
import com.neatlicity.service.api.weather.integration.json.OpenWeatherJson;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiWeatherApplicationTests {

    private static final String WEATHER_NAME = "TEST WEATHER";
    private static final Date WEATHER_DATE = new Date();

    @Autowired
    TestRestTemplate rest;

    @MockBean
    OpenWeatherApiClient openWeatherApiClient;

    @Test
    public void contextLoads() {
        OpenWeatherJson openWeatherJson = new OpenWeatherJson();
        openWeatherJson.setName(WEATHER_NAME);
        openWeatherJson.setDt(WEATHER_DATE);
        Mockito.when(this.openWeatherApiClient.currentWeather())
                .thenReturn(openWeatherJson);

        OpenWeatherJson weatherJson = this.rest.getForObject("/current", OpenWeatherJson.class);
        assertNotNull(weatherJson);
        assertEquals(weatherJson.getName(), WEATHER_NAME);
        assertEquals(weatherJson.getDt(), WEATHER_DATE);
    }

}
