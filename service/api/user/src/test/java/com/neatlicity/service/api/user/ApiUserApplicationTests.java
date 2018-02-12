package com.neatlicity.service.api.user;

import com.neatlicity.service.api.user.data.User;
import com.neatlicity.service.api.user.data.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiUserApplicationTests {

    @Autowired
    TestRestTemplate rest;

    @Test
    public void contextLoads() {
        String response = this.rest.getForObject("/users", String.class);
        assertNotNull(response);
    }
}
