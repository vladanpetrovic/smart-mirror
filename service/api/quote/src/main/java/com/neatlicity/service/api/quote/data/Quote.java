package com.neatlicity.service.api.quote.data;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection="quotes")
public class Quote {

    @Id
    private String id;

    private String quote;
}
