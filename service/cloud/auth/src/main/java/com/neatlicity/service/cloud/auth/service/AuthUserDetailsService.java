package com.neatlicity.service.cloud.auth.service;

import com.neatlicity.service.cloud.auth.data.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthUserDetailsService implements UserDetailsService {

    private final @NonNull UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.userRepository.findByUsername(username)
                .map(userData ->
                        User.withUsername(userData.getUsername())
                                .password(userData.getPassword()).roles("USER")
                                .build())
                .orElseThrow(() -> new UsernameNotFoundException("couldn't find " + username + "!"));
    }
}
