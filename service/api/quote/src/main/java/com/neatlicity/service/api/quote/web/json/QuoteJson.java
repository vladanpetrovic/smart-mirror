package com.neatlicity.service.api.quote.web.json;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class QuoteJson {
    private String text;
    private String author;
}
