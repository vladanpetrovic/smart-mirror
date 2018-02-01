package com.neatlicity.service.api.device.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "devices", path = "devices")
public interface DeviceRepository extends MongoRepository<Device, String> {

    @Query("{ 'user.userId' : ?0 }")
    List<Device> findByUserId(@Param("userId") String userId);
}
