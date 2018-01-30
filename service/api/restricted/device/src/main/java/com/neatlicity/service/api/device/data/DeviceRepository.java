package com.neatlicity.service.api.device.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "devices", path = "devices")
public interface DeviceRepository extends MongoRepository<Device, String> {

}
