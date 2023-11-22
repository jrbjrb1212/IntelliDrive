package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/RouteReservation")
public class ScheduleForm {

    @GetMapping("/ScheduleForm")
    public String getScheduleForm() {
        return "NOT FUNCTIONING: getScheduleForm";
    }

    @PostMapping("/ScheduleForm")
    public String postScheduleForm() {
        return "NOT FUNCTIONING: postScheduleForm";
    }

    @PutMapping("/ScheduleForm")
    public String putScheduleForm() {
        return "NOT FUNCTIONING: putScheduleForm";
    }

    @DeleteMapping("/ScheduleForm")
    public String deleteScheduleForm() {
        return "NOT FUNCTIONING: deleteScheduleForm";
    }
}