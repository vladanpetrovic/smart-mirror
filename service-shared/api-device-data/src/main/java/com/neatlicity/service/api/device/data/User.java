package com.neatlicity.service.api.device.data;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private String userId;
    private String accessToken;
}
