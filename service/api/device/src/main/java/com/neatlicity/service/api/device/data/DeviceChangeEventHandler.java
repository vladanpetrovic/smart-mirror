package com.neatlicity.service.api.device.data;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

@Slf4j
@RepositoryEventHandler(Device.class)
public class DeviceChangeEventHandler {

    @Autowired
    DeviceEventRepository deviceEventRepository;

    @HandleAfterSave
    public void onAfterSave(Device device) {
        log.info("TODO AFTER SAVE " + device);
        if(device.getUser() != null) {
            deviceEventRepository.save(
                    DeviceEvent.builder()
                            .type(DeviceEventType.USER_CONNECTED)
                            .device(device)
                            .deviceId(device.getId())
                            .build());
        } else {
            deviceEventRepository.save(
                    DeviceEvent.builder()
                            .type(DeviceEventType.USER_DISCONNECTED)
                            .device(device)
                            .deviceId(device.getId())
                            .build());
        }
    }
}
