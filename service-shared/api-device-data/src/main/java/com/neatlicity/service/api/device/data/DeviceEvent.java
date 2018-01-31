package com.neatlicity.service.api.device.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="device-events")
public class DeviceEvent {

    @Id
    private String id;
    private DeviceEventType type;
    private Device device;
    private String deviceId;
}
