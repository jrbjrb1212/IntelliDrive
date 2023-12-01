package com.vers1.backend_services;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.FileWriter;
import java.io.IOException;
import java.io.File;


// /RouteReserve/RideForm
@RestController
@RequestMapping("/RouteReserve")
public class RideForm {

    @GetMapping("/RideForm")
    public String GetRideForm() {
        System.out.println("GET HERE!");
        return "GET Mapping";
    }

    @PostMapping("/RideForm")
    public String postRideForm(@RequestBody FormData formData) {
        // Access the properties of the formData object as needed
        // String formDataString = formData.toString();
        // String fileName = formData.getLastName() + "_" + formData.getFirstName() + ".txt";
        // String filePath = "src/main/java/com/vers1/backend_services/File_Storage/Reservation_Forms/" + fileName;
        // File file = new File(filePath);

        // try {
        //     // Check if the file exists
        //     if (file.exists()) {
        //         // Clear the file by opening it in write mode
        //         FileWriter fileClearer = new FileWriter(file, false);
        //         fileClearer.write(""); // Clears the file content by writing an empty string
        //         fileClearer.close();
        //         System.out.println("File " + fileName + " already exists. Cleared its content.");
        //     } else {
        //         // Create a new file if it doesn't exist
        //         if (file.createNewFile()) {
        //             System.out.println("File " + fileName + " created.");
        //         } else {
        //             System.out.println("File " + fileName + " already exists.");
        //         }
        //     }

        //     // Write formDataString to the file
        //     FileWriter fileWriter = new FileWriter(file, true); // Set 'true' to append content
        //     fileWriter.write(formDataString + "\n"); // Append a new line after writing the content
        //     fileWriter.close();
        //     System.out.println("Data written to " + fileName);
        // } catch (IOException e) {
        //     System.out.println("An error occurred while writing to the file: " + e.getMessage());
        // }

        // ResponseEntity<String> reservationResponse = reserveRideRequest(formDataString);
        // ResponseEntity<String> invoiceResponse = invoiceRequest(formDataString);

        return "Lorem";
    }

    // private ResponseEntity<String> reserveRideRequest(String formDataString){
    //     // Make a POST request to an ATP reserve ride endpoint
    //     RestTemplate restTemplate = new RestTemplate();
        
    //     // Define the URL and the request body for the POST request
    //     String url = "http://localhost:8080/ATP/ReserveRide";
    //     HttpHeaders headers = new HttpHeaders();
    //     headers.setContentType(MediaType.APPLICATION_JSON);
    //     HttpEntity<String> request = new HttpEntity<>(formDataString, headers);
        
    //     // Make the POST request
    //     ResponseEntity<String> response = restTemplate.exchange(
    //         url,
    //         HttpMethod.POST,
    //         request,
    //         String.class
    //     );
        
    //     return response;
    // }

    // private ResponseEntity<String> invoiceRequest(String formDataString){
    //     // Make a POST request to an ATP reserve ride endpoint
    //     RestTemplate restTemplate = new RestTemplate();
        
    //     // Define the URL and the request body for the POST request
    //     String url = "http://localhost:8080/Pricing/Invoice";
    //     HttpHeaders headers = new HttpHeaders();
    //     headers.setContentType(MediaType.APPLICATION_JSON);
    //     HttpEntity<String> request = new HttpEntity<>(formDataString, headers);
        
    //     // Make the POST request
    //     ResponseEntity<String> response = restTemplate.exchange(
    //         url,
    //         HttpMethod.POST,
    //         request,
    //         String.class
    //     );
        
    //     return response;
    // }
}