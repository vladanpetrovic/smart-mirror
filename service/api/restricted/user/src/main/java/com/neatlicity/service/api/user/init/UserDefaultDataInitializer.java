package com.neatlicity.service.api.user.init;

import com.neatlicity.service.api.user.data.User;
import com.neatlicity.service.api.user.data.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (userRepository.findByEmail("vladan@test.com") == null) {
            User vladan = User.builder()
                    .firstName("Vladan")
                    .lastName("Petrović")
                    .email("vladan@test.com")
                    .username("vladan@test.com")
                    .password("pass123")
                    .active(true)
                    .build();
            userRepository.save(vladan);
        }
    }
}
