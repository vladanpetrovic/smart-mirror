package com.neatlicity.service.api.weather.integration.json;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter @Setter
public class OpenWeatherJson {

    @Getter @Setter
    static class CoordJson {
        double lon;
        double lat;
    }
    CoordJson coord;

    @Getter @Setter
    static class WeatherJson {
        int id;
        String main;
        String description;
        String icon;
    }
    List<WeatherJson> weather;

    String base;

    @Getter @Setter
    static class MainJson {
        double temp;
        int pressure;
        int humidity;
        @JsonProperty("temp_min") int tempMin;
        @JsonProperty("temp_max") int tempMax;
    }
    MainJson main;

    int visibility;

    @Getter @Setter
    static class WindJson {
        double speed;
        int deg;
    }
    WindJson wind;

    @Getter @Setter
    static class CloudsJson {
        int all;
    }
    CloudsJson clouds;

    Date dt;

    @Getter @Setter
    static class SysJson {
        int type;
        int id;
        double message;
        String country;
        Date sunrise;
        Date sunset;
    }
    SysJson sys;

    int id;
    String name;
    int cod;
}

