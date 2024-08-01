package com.ecommerce.domain.port;

import com.ecommerce.domain.model.User;

public interface IUserRepository {
    User save(User user);
    User findByEmail(String email);
    User findById(Integer id);
}
