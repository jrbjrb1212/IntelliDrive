package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ATP")
public class RideHistory {

    @GetMapping("/RideHistory")
    public String getRideHistory() {
        return "NOT FUNCTIONING: getRideHistory";
    }

    @PostMapping("/RideHistory")
    public String postRideHistory() {
        return "NOT FUNCTIONING: postRideHistory";
    }

    @PutMapping("/RideHistory")
    public String putRideHistory() {
        return "NOT FUNCTIONING: putRideHistory";
    }

    @DeleteMapping("/RideHistory")
    public String deleteRideHistory() {
        return "NOT FUNCTIONING: deleteRideHistory";
    }
}