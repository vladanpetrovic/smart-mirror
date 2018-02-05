package com.neatlicity.service.api.weather.integration;

import com.neatlicity.service.api.weather.integration.json.OpenWeatherJson;
import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(
        name = "open-weather",
        url = "http://api.openweathermap.org/data/2.5",
        fallback = OpenWeatherApiClientFallback.class
)
public interface OpenWeatherApiClient {

    @GetMapping("/weather?lat=44.82&lon=20.47&units=metric&APPID=9b6614f4c398327d053a801308719e44")
    OpenWeatherJson currentWeather();
}
