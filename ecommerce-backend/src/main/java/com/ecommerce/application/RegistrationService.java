package com.ecommerce.application;

import com.ecommerce.domain.model.User;
import com.ecommerce.domain.port.IUserRepository;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    private final IUserRepository iUserRepository;

    public RegistrationService(IUserRepository iUserRepository) {
        this.iUserRepository = iUserRepository;
    }

    public User register (User user){
        return iUserRepository.save(user);
    }
}
