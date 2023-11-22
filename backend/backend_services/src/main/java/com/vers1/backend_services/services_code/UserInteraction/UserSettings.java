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
public class UserSettings {

    @GetMapping("/UserSettings")
    public String getUserSettings() {
        return "NOT FUNCTIONING: getUserSettings";
    }

    @PostMapping("/UserSettings")
    public String postUserSettings() {
        return "NOT FUNCTIONING: postUserSettings";
    }

    @PutMapping("/UserSettings")
    public String putUserSettings() {
        return "NOT FUNCTIONING: putUserSettings";
    }

    @DeleteMapping("/UserSettings")
    public String deleteUserSettings() {
        return "NOT FUNCTIONING: deleteUserSettings";
    }
}