package com.neatlicity.service.api.quote;

import com.neatlicity.service.api.quote.web.json.QuoteJson;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiQuoteApplicationIT {

    private static final String[] QUOTES = {
            "Pre nego što krenete da tražite sreću, proverite – možda ste već srećni. " +
                    "Sreća je mala, obična i neupadljiva i mnogi ne umeju da je vide.",
            "Ko želi da je stalno u pravu, mora često da menja mišljenje.",
            "Stiže proljeće, žao mi je svih onih kojima to nije važno.",
            "Ako želite da budete bolji od drugih ljudi, ne smete raditi ono što oni rade " +
                    "i ne možete živeti onako kako oni žive."

    };
    @Autowired
    TestRestTemplate rest;

    @Test
    public void contextLoads() {
        QuoteJson quoteJson = this.rest.getForObject("/of-the-day", QuoteJson.class);
        assertNotNull(quoteJson);
        assertTrue(quoteJson.getAuthor().equals("Duško Radović"));
        assertTrue(Arrays.asList(QUOTES).contains(quoteJson.getText()));
    }
}
