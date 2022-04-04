package com.revature.p2rr.controllers;

import com.revature.p2rr.domain.User;
import com.revature.p2rr.repositories.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {
    private UserRepository userRepo;

    public UserController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping("/users")
    public Iterable<User> getAll() {
        return userRepo.findAll();
    }

    @PostMapping("/users")
    public User post(@RequestBody User user) {
        return userRepo.save(user);
    }
}
