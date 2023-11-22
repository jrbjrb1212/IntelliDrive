package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ATP")
public class ReserveRide {

    @GetMapping("/ReserveRide")
    public String getReserveRide() {
        return "Hello there!";
    }

    @PostMapping("/ReserveRide")
    public String postReserveRide(@RequestBody String formDataString) {
        // deserialize the string input
        FormData formData = new FormData();
        formData.deserializeFromString(formDataString);


        return "Booked ride";
    }
}