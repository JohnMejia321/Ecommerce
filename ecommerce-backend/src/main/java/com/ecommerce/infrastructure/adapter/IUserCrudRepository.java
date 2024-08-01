package com.ecommerce.infrastructure.adapter;

import com.ecommerce.infrastructure.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface IUserCrudRepository extends CrudRepository<UserEntity,Integer> {
}

