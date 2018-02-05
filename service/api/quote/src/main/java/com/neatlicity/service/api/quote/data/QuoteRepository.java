package com.neatlicity.service.api.quote.data;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "quotes", path = "quotes")
public interface QuoteRepository extends MongoRepository<Quote, String> {
}
