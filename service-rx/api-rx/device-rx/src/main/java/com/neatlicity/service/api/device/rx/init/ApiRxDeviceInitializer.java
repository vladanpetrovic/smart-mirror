package com.neatlicity.service.api.device.rx.init;

import com.neatlicity.service.api.device.data.Device;
import com.neatlicity.service.api.device.data.DeviceEvent;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.CollectionOptions;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ApiRxDeviceInitializer implements ApplicationRunner {

    private final @NonNull MongoTemplate mongoTemplate;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(DeviceEvent.class)) {
            mongoTemplate.createCollection(DeviceEvent.class, CollectionOptions.empty().capped().size(100000L));
        }
    }
}