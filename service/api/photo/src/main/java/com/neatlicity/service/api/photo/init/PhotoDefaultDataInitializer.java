package com.neatlicity.service.api.photo.init;

import com.neatlicity.service.api.photo.data.PhotoRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PhotoDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull PhotoRepository photoRepository;

    @Override
    public void run(ApplicationArguments args) {

    }
}
