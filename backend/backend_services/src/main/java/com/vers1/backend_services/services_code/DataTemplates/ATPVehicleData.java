package com.vers1.backend_services.services_code.DataTemplates;

import com.google.gson.Gson;
import java.util.ArrayList;

public class ATPVehicleData {
    private String vehicleID;
    private boolean vehicleHealth;
    private String vehicleMake;
    private String vehicleModel;
    private String vehicleYear;
    private String numberOfPassengers;
    private double vehicleCharge;
    private ArrayList<String> availableTimes;
    private ArrayList<String> bookedTimes;

    public ATPVehicleData() {
        // Default constructor
    }

    public ATPVehicleData(String vehicleID, boolean vehicleHealth, String vehicleMake, String vehicleModel,
                          String vehicleYear, String numberOfPassengers, double vehicleCharge) {
        this.vehicleID = vehicleID;
        this.vehicleHealth = vehicleHealth;
        this.vehicleMake = vehicleMake;
        this.vehicleModel = vehicleModel;
        this.vehicleYear = vehicleYear;
        this.numberOfPassengers = numberOfPassengers;
        this.vehicleCharge = vehicleCharge;
        this.availableTimes = new ArrayList<>();
        this.bookedTimes = new ArrayList<>();
    }

    public String getVehicleID() {
        return vehicleID;
    }

    public void setVehicleID(String vehicleID) {
        this.vehicleID = vehicleID;
    }

    public boolean getVehicleHealth() {
        return vehicleHealth;
    }

    public void setVehicleHealth(boolean vehicleHealthy) {
        this.vehicleHealth = vehicleHealth;
    }

    public String getVehicleMake() {
        return vehicleMake;
    }

    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public String getVehicleYear() {
        return vehicleYear;
    }

    public void setVehicleYear(String vehicleYear) {
        this.vehicleYear = vehicleYear;
    }

    public String getNumberOfPassengers() {
        return numberOfPassengers;
    }

    public void setNumberOfPassengers(String numberOfPassengers) {
        this.numberOfPassengers = numberOfPassengers;
    }

    public double getVehicleCharge() {
        return vehicleCharge;
    }

    public void setVehicleCharge(double vehicleCharge) {
        this.vehicleCharge = vehicleCharge;
    }

    public ArrayList<String> getAvailableTimes() {
        return availableTimes;
    }

    public void setAvailableTimes(ArrayList<String> availableTimes) {
        this.availableTimes = availableTimes;
    }

    public ArrayList<String> getBookedTimes() {
        return bookedTimes;
    }

    public void setBookedTimes(ArrayList<String> bookedTimes) {
        this.bookedTimes = bookedTimes;
    }

    @Override
    public String toString() {
        Gson gson = new Gson();
        return gson.toJson(this);
    }

    public void deserializeFromString(String vehicleDataString){
        Gson gson = new Gson();
        ATPVehicleData temp = gson.fromJson(vehicleDataString, ATPVehicleData.class);

        this.vehicleID = temp.vehicleID;
        this.vehicleHealth = temp.vehicleHealth;
        this.vehicleMake = temp.vehicleMake;
        this.vehicleModel = temp.vehicleModel;
        this.vehicleYear = temp.vehicleYear;
        this.numberOfPassengers = temp.numberOfPassengers;
        this.vehicleCharge = temp.vehicleCharge;
        this.availableTimes = temp.availableTimes;
        this.bookedTimes = temp.bookedTimes;
    }
}
