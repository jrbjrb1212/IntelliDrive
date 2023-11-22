package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/Pricing")
public class Invoice {

    @GetMapping("/Invoice")
    public String getInvoice() {
        return "NOT FUNCTIONING: getInvoice";
    }

    @PostMapping("/Invoice")
    public String postInvoice() {
        return "NOT FUNCTIONING: postInvoice";
    }

    @PutMapping("/Invoice")
    public String putInvoice() {
        return "NOT FUNCTIONING: putInvoice";
    }

    @DeleteMapping("/Invoice")
    public String deleteInvoice() {
        return "NOT FUNCTIONING: deleteInvoice";
    }
}