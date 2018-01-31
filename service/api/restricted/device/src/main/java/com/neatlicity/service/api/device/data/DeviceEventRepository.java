package com.neatlicity.service.api.device.data;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeviceEventRepository extends MongoRepository<DeviceEvent, String> {
}
