package com.neatlicity.service.api.photo.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "photos", path = "photos")
public interface PhotoRepository extends MongoRepository<Photo, String> {

}
