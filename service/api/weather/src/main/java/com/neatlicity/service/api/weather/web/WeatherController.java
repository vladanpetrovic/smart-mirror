package com.neatlicity.service.api.weather.web;

import com.neatlicity.service.api.weather.integration.OpenWeatherApiClient;
import com.neatlicity.service.api.weather.integration.json.OpenWeatherJson;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WeatherController {

    private final @NonNull OpenWeatherApiClient openWeatherClient;

    @GetMapping("/current")
    public OpenWeatherJson current() {
        return openWeatherClient.currentWeather();
    }
}
