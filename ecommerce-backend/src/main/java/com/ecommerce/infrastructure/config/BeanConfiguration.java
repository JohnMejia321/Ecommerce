package com.ecommerce.infrastructure.config;

import com.ecommerce.application.UserService;
import com.ecommerce.domain.port.IUserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {
    @Bean
    public UserService userService(IUserRepository iUserRepository){
        return new UserService(iUserRepository);
    }

}
