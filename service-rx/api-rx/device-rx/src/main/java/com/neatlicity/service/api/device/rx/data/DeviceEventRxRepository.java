package com.neatlicity.service.api.device.rx.data;

import com.neatlicity.service.api.device.data.DeviceEvent;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.data.mongodb.repository.Tailable;
import reactor.core.publisher.Flux;

public interface DeviceEventRxRepository extends ReactiveMongoRepository<DeviceEvent, String> {

    @Tailable
    Flux<DeviceEvent> findByDeviceId(String deviceId);
}