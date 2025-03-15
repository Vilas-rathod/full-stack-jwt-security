package com.vilas.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/welcome")
    public ResponseEntity<String> userWelcome() {
        return ResponseEntity.ok("Welcome User!!!!");
    }
}

