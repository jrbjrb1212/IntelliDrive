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
public class PlanRide {

    @GetMapping("/PlanRide")
    public String getPlanRide() {
        return "NOT FUNCTIONING: getPlanRide";
    }

    @PostMapping("/PlanRide")
    public String postPlanRide() {
        return "NOT FUNCTIONING: postPlanRide";
    }
}