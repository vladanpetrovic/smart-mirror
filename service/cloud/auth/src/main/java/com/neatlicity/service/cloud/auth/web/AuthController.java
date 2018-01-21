package com.neatlicity.service.cloud.auth.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthController {

    @RequestMapping("/user")
    Principal principal(Principal principal) {
        return principal;
    }
}
