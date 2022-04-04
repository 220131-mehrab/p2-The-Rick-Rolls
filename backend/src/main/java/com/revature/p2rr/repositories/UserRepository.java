package com.revature.p2rr.repositories;

import com.revature.p2rr.domain.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    
}
