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
public class HistoryForm {

    @GetMapping("/HistoryForm")
    public String getHistoryForm() {
        return "NOT FUNCTIONING: getHistoryForm";
    }

    @PostMapping("/HistoryForm")
    public String postHistoryForm() {
        return "NOT FUNCTIONING: postHistoryForm";
    }

    @PutMapping("/HistoryForm")
    public String putHistoryForm() {
        return "NOT FUNCTIONING: putHistoryForm";
    }

    @DeleteMapping("/HistoryForm")
    public String deleteHistoryForm() {
        return "NOT FUNCTIONING: deleteHistoryForm";
    }
}