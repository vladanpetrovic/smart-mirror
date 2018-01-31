package com.neatlicity.service.api.device.rx.web;

import com.neatlicity.service.api.device.data.DeviceEvent;
import com.neatlicity.service.api.device.rx.data.DeviceEventRxRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/event")
@RequiredArgsConstructor
public class DeviceRxController {
    private final @NonNull DeviceEventRxRepository deviceEventRxRepository;

    @GetMapping(value = "/stream/byDeviceId/{deviceId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<DeviceEvent> stream(@PathVariable("deviceId") String deviceId) {
        return deviceEventRxRepository.findByDeviceId(deviceId);
    }
}
