package com.neatlicity.service.api.quote.init;

import com.neatlicity.service.api.quote.data.AuthorQuotes;
import com.neatlicity.service.api.quote.data.AuthorQuotesRepository;
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
    private final @NonNull AuthorQuotesRepository authorQuotesRepository;

    @Override
    public void run(ApplicationArguments args) {
        if (!mongoTemplate.collectionExists(AuthorQuotes.class)) {
            mongoTemplate.createCollection(AuthorQuotes.class);

            List<String> quotes = new ArrayList<>();
            quotes.add("Pre nego što krenete da tražite sreću, proverite – možda ste već srećni. Sreća je mala, " +
                            "obična i neupadljiva i mnogi ne umeju da je vide.");
            quotes.add("Ko želi da je stalno u pravu, mora često da menja mišljenje.");
            quotes.add("Stiže proljeće, žao mi je svih onih kojima to nije važno.");
            quotes.add("Ako želite da budete bolji od drugih ljudi, ne smete raditi ono što oni rade " +
                            "i ne možete živeti onako kako oni žive.");
            AuthorQuotes duskoRadovic = AuthorQuotes.builder()
                    .firstName("Duško")
                    .lastName("Radović")
                    .quotes(quotes)
                    .build();
            authorQuotesRepository.save(duskoRadovic);
        }
    }
}
