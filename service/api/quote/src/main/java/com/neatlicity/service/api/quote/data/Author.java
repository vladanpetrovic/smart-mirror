package com.neatlicity.service.api.quote.data;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@Document(collection="authors")
public class Author {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private List<Quote> quotes;
}
