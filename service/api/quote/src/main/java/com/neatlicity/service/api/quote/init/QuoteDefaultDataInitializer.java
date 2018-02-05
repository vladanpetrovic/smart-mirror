package com.neatlicity.service.api.quote.init;

import com.neatlicity.service.api.quote.data.Author;
import com.neatlicity.service.api.quote.data.AuthorRepository;
import com.neatlicity.service.api.quote.data.Quote;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class QuoteDefaultDataInitializer implements ApplicationRunner {

    private final @NonNull MongoTemplate mongoTemplate;
    private final @NonNull AuthorRepository authorRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(Quote.class)) {
            mongoTemplate.createCollection(Quote.class);

            List<Quote> quotes = new ArrayList<>();
            quotes.add(Quote.builder()
                    .quote("Pre nego što krenete da tražite sreću, proverite – možda ste već srećni. Sreća je mala, " +
                            "obična i neupadljiva i mnogi ne umeju da je vide.")
                    .build());
            quotes.add(Quote.builder()
                    .quote("Ko želi da je stalno u pravu, mora često da menja mišljenje.")
                    .build());
            quotes.add(Quote.builder()
                    .quote("Stiže proljeće, žao mi je svih onih kojima to nije važno.")
                    .build());
            quotes.add(Quote.builder()
                    .quote("Ako želite da budete bolji od drugih ljudi, ne smete raditi ono što oni rade " +
                            "i ne možete živeti onako kako oni žive.")
                    .build());
            Author duskoRadovic = Author.builder()
                    .firstName("Duško")
                    .lastName("Radović")
                    .quotes(quotes)
                    .build();
            authorRepository.save(duskoRadovic);
        }
    }
}
