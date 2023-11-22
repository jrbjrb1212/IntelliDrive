package com.vers1.backend_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/API/Transport")
public class CarInfo {

    @GetMapping("/CarInfo")
    public String getCarInfo() {
        return "NOT FUNCTIONING: getCarInfo";
    }

    @PostMapping("/CarInfo")
    public String postCarInfo() {
        return "NOT FUNCTIONING: postCarInfo";
    }

    @PutMapping("/CarInfo")
    public String putCarInfo() {
        return "NOT FUNCTIONING: putCarInfo";
    }

    @DeleteMapping("/CarInfo")
    public String deleteCarInfo() {
        return "NOT FUNCTIONING: deleteCarInfo";
    }
}