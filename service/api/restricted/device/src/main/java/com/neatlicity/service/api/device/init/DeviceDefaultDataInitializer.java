package com.neatlicity.service.api.device.init;

import com.neatlicity.service.api.device.data.Device;
import com.neatlicity.service.api.device.data.DeviceRepository;
import com.neatlicity.service.api.device.data.DeviceType;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class DeviceDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull MongoTemplate mongoTemplate;
    private final @NonNull DeviceRepository deviceRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(Device.class)) {
            mongoTemplate.createCollection(Device.class);

            Device smartMirrorDevice = Device.builder()
                    .type(DeviceType.SMART_MIRROR)
                    .build();
            deviceRepository.save(smartMirrorDevice);
            Device smartPhotoFrameDevice = Device.builder()
                    .type(DeviceType.SMART_PHOTO_FRAME)
                    .build();
            deviceRepository.save(smartPhotoFrameDevice);
        }
    }
}
