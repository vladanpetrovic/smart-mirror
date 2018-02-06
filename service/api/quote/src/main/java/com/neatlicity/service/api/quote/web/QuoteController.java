package com.neatlicity.service.api.quote.web;

import com.neatlicity.service.api.quote.data.AuthorQuotes;
import com.neatlicity.service.api.quote.data.AuthorQuotesRepository;
import com.neatlicity.service.api.quote.web.json.QuoteJson;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequiredArgsConstructor
public class QuoteController {

    private final @NonNull
    AuthorQuotesRepository authorQuotesRepository;

    @GetMapping("/of-the-day")
    public QuoteJson ofTheDay() {
        AuthorQuotes authorQuotes = authorQuotesRepository.findAll().get(
                ThreadLocalRandom.current().nextInt(
                        (int) authorQuotesRepository.count()));
        return new QuoteJson(
                authorQuotes.getQuotes().get(
                        ThreadLocalRandom.current().nextInt(
                                authorQuotes.getQuotes().size())),
                authorQuotes.getFullname());
    }
}
