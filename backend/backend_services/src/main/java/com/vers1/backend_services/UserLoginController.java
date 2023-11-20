package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserLoginController {

    @GetMapping("/login")
    public String hello() {
        return "Hello, World";
    }
}