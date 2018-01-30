package com.neatlicity.service.api.device.init;

import com.neatlicity.service.api.device.data.DeviceRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DeviceDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull
    DeviceRepository deviceRepository;

    @Override
    public void run(ApplicationArguments args) {

    }
}
