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
public class ScheduleRide {

    @GetMapping("/ScheduleRide")
    public String getScheduleRide() {
        return "NOT FUNCTIONING: getScheduleRide";
    }

    @PostMapping("/ScheduleRide")
    public String postScheduleRide() {
        return "NOT FUNCTIONING: postScheduleRide";
    }

    @PutMapping("/ScheduleRide")
    public String putScheduleRide() {
        return "NOT FUNCTIONING: putScheduleRide";
    }

    @DeleteMapping("/ScheduleRide")
    public String deleteScheduleRide() {
        return "NOT FUNCTIONING: deleteScheduleRide";
    }
}