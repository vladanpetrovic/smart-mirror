package com.neatlicity.service.api.quote.web;

import com.neatlicity.service.api.quote.data.Author;
import com.neatlicity.service.api.quote.data.AuthorRepository;
import com.neatlicity.service.api.quote.web.json.QuoteJson;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ThreadLocalRandom;

@RestController
@RequiredArgsConstructor
public class QuoteController {

    private final @NonNull AuthorRepository authorRepository;

    @GetMapping("/of-the-day")
    public QuoteJson ofTheDay() {
        Author author = authorRepository.findAll().get(
                ThreadLocalRandom.current().nextInt(
                        (int) authorRepository.count()));
        return new QuoteJson(
                author.getQuotes().get(
                        ThreadLocalRandom.current().nextInt(
                                author.getQuotes().size())
                ).getQuote(),
                author.getFullname());
    }
}
