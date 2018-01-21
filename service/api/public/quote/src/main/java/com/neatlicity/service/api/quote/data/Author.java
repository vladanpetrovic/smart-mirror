package com.neatlicity.service.api.quote.data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="authors")
public class Author {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private List<Quote> quotes;

    public String getFullname() {
        return String.format("%s %s", firstName, lastName);
    }
}
