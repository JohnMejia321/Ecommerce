package com.ecommerce.infrastructure.adapter;

import com.ecommerce.infrastructure.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface IUserCrudRepository extends CrudRepository<UserEntity,Integer> {

    Optional<UserEntity> findByEmail(String email);

}

