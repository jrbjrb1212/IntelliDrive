package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Transport")
public class AvailableCars {

    @GetMapping("/AvailableCars")
    public String getAvailableCars() {
        return "NOT FUNCTIONING: getAvailableCars";
    }

    @PostMapping("/AvailableCars")
    public String postAvailableCars() {
        return "NOT FUNCTIONING: postAvailableCars";
    }

    @PutMapping("/AvailableCars")
    public String putAvailableCars() {
        return "NOT FUNCTIONING: putAvailableCars";
    }

    @DeleteMapping("/AvailableCars")
    public String deleteAvailableCars() {
        return "NOT FUNCTIONING: deleteAvailableCars";
    }
}