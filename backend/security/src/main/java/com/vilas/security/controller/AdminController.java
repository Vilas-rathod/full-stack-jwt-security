package com.vilas.security.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @GetMapping("/welcome")
    public ResponseEntity<String> adminWelcome() {
        return ResponseEntity.ok("Welcome Admin!!!!!!");
    }
}