package com.vers1.backend_services;

import com.google.gson.Gson;

// Sample Java object that can represent form data
public class FormData {
    private String userID;
    private String firstName;
    private String lastName;
    private int numberOfPassengers;
    private boolean carpool;
    private String dateOfRide;
    private String hour;
    private String minute;
    private String period;
    private String purposeOfRide;
    private Location pickupLocation;
    private Location dropOffLocation;


    public FormData() {
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getNumberOfPassengers() {
        return this.numberOfPassengers;
    }

    public void setNumberOfPassengers(int numberOfPassengers) {
        this.numberOfPassengers = numberOfPassengers;
    }

    public boolean isCarpool() {
        return this.carpool;
    }

    public boolean getCarpool() {
        return this.carpool;
    }

    public void setCarpool(boolean carpool) {
        this.carpool = carpool;
    }

    public String getDateOfRide() {
        return this.dateOfRide;
    }

    public void setDateOfRide(String dateOfRide) {
        this.dateOfRide = dateOfRide;
    }

    public String getHour() {
        return this.hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getMinute() {
        return this.minute;
    }

    public void setMinute(String minute) {
        this.minute = minute;
    }

    public String getPeriod() {
        return this.period;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public String getPurposeOfRide() {
        return this.purposeOfRide;
    }

    public void setPurposeOfRide(String purposeOfRide) {
        this.purposeOfRide = purposeOfRide;
    }

    public Location getPickupLocation() {
        return this.pickupLocation;
    }

    public void setPickupLocation(Location pickupLocation) {
        this.pickupLocation = pickupLocation;
    }

    public Location getDropOffLocation() {
        return this.dropOffLocation;
    }

    public void setDropOffLocation(Location dropOffLocation) {
        this.dropOffLocation = dropOffLocation;
    }

    // Inner class for Location
    public static class Location {
        private String streetAddress;
        private String streetAddress2;
        private String city;
        private String state;
        private String postalCode;

        // Constructors, getters, and setters for Location
        public Location() {
        }

        public Location(String streetAddress, String streetAddress2, String city, String state, String postalCode) {
            this.streetAddress = streetAddress;
            this.streetAddress2 = streetAddress2;
            this.city = city;
            this.state = state;
            this.postalCode = postalCode;
        }

        public String getStreetAddress() {
            return this.streetAddress;
        }

        public void setStreetAddress(String streetAddress) {
            this.streetAddress = streetAddress;
        }

        public String getStreetAddress2() {
            return this.streetAddress2;
        }

        public void setStreetAddress2(String streetAddress2) {
            this.streetAddress2 = streetAddress2;
        }

        public String getCity() {
            return this.city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getState() {
            return this.state;
        }

        public void setState(String state) {
            this.state = state;
        }

        public String getPostalCode() {
            return this.postalCode;
        }

        public void setPostalCode(String postalCode) {
            this.postalCode = postalCode;
        }
        
        // @Override
        // public String toString() {
        //     return "{" +
        //         "\"streetAddress\": \"" + getStreetAddress() + "\"," +
        //         "\"streetAddress2\": \"" + getStreetAddress2() + "\"," +
        //         "\"city\": \"" + getCity() + "\"," +
        //         "\"state\": \"" + getState() + "\"," +
        //         "\"postalCode\": \"" + getPostalCode() + "\"" +
        //         "}";
        // }
        @Override
        public String toString() {
            Gson gson = new Gson();
            return gson.toJson(this);
        }
    }


    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this);
    }

    public void deserializeFromString(String formDataString){
        // formDataString = formDataString.replaceAll("'", "\"");

        Gson gson = new Gson();
        FormData temp = gson.fromJson(formDataString, FormData.class);

        this.firstName = temp.firstName;
        this.lastName = temp.lastName;
        this.numberOfPassengers = temp.numberOfPassengers;
        this.carpool = temp.carpool;
        this.dateOfRide = temp.dateOfRide;
        this.hour = temp.hour;
        this.minute = temp.minute;
        this.period = temp.period;
        this.purposeOfRide = temp.purposeOfRide;
        this.pickupLocation = temp.pickupLocation;
        this.dropOffLocation = temp.dropOffLocation;
    }
}