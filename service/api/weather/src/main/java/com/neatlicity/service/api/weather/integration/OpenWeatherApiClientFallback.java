package com.neatlicity.service.api.weather.integration;

import com.neatlicity.service.api.weather.integration.json.OpenWeatherJson;

public class OpenWeatherApiClientFallback implements OpenWeatherApiClient {

    @Override
    public OpenWeatherJson currentWeather() {
        return new OpenWeatherJson();
    }
}
