package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/UserInteraction")
public class UserLogin {

    @GetMapping("/UserLogin")
    public String getUserLogin() {
        return "NOT FUNCTIONING: getUserLogin";
    }

    @PostMapping("/UserLogin")
    public String postUserLogin() {
        return "NOT FUNCTIONING: postUserLogin";
    }

    @PutMapping("/UserLogin")
    public String putUserLogin() {
        return "NOT FUNCTIONING: putUserLogin";
    }

    @DeleteMapping("/UserLogin")
    public String deleteUserLogin() {
        return "NOT FUNCTIONING: deleteUserLogin";
    }
}