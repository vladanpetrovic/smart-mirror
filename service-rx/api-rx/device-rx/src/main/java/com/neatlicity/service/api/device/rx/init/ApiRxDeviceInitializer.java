package com.neatlicity.service.api.device.rx.init;

import com.neatlicity.service.api.device.data.DeviceEvent;
import com.neatlicity.service.api.init.EventCollectionInitializer;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class ApiRxDeviceInitializer extends EventCollectionInitializer<DeviceEvent> {

    public ApiRxDeviceInitializer(MongoTemplate mongoTemplate) {
        super(mongoTemplate);
    }
}