import React, { useState } from 'react';
import '../PagesCSS/Forms.css';

const UserProfile = ({ closeModal }) => {
  // State based storage of form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    numberOfPassengers: 1,
    carpool: false,
    firstRideDate: '',
    hour: '',
    minute: '',
    period: '',
    purposeOfRide: '',
    homeAddress: {
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
    },
    workAddress: {
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
    },
    spouseFirstName: '',
    spouseLastName: '',
    spouseWorkAddress: {
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
    },
    makePreference: '',
    modelPreference: '',
    yearPreference: '',
  });

  // Handle update to a input field
  // Ex: Inputing the first name
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle submission of form 
  const handleSubmit = (event) => {
    // Prevent empty submission
    // TODO: Parse relevant fields to verify that they are filled correctly
    event.preventDefault();
    console.log(formData);

    //TODO: Send data to an API
    closeModal();
  };

  return (
    <div className="box-outline">
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>User Profile</h2>

        {/* First Name Field */}
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Last Name Field */}
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
          />
        </label>


        {/* Phone Number Field */}
        <label className="form-label">
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Email Address Field */}
        <label className="form-label">
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Date Of Birth Field */}
        <label className="form-label">
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Home Address */}
        <div className="location-box">
          <h3>Home Address</h3>
          <label className="form-label">
            Street Address:
            <input
              type="text"
              name="homeAddress.streetAddress"
              value={formData.homeAddress.streetAddress}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Street Address 2:
            <input
              type="text"
              name="homeAddress.streetAddress2"
              value={formData.homeAddress.streetAddress2}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="homeAddress.city"
              value={formData.homeAddress.city}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            State:
            <input
              type="text"
              name="homeAddress.state"
              value={formData.homeAddress.state}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Postal/Zip Code:
            <input
              type="text"
              name="homeAddress.postalCode"
              value={formData.homeAddress.postalCode}
              onChange={handleChange}
              className="form-input"
            />
          </label>
        </div>

        {/* Work Address */}
        <div className="location-box">
          <h3>Work Address</h3>
          <label className="form-label">
            Street Address:
            <input
              type="text"
              name="workAddress.streetAddress"
              value={formData.workAddress.streetAddress}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Street Address 2:
            <input
              type="text"
              name="workAddress.streetAddress2"
              value={formData.workAddress.streetAddress2}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="workAddress.city"
              value={formData.workAddress.city}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            State:
            <input
              type="text"
              name="workAddress.state"
              value={formData.workAddress.state}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Postal/Zip Code:
            <input
              type="text"
              name="workAddress.postalCode"
              value={formData.workAddress.postalCode}
              onChange={handleChange}
              className="form-input"
            />
          </label>
        </div>

        {/* Spouse First Name Field */}
        <label className="form-label">
          Spouse First Name:
          <input
            type="text"
            name="spouseFirstName"
            value={formData.spouseFirstName}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Spouse Last Name Field */}
        <label className="form-label">
          Spouse Last Name:
          <input
            type="text"
            name="spouseLastName"
            value={formData.spouseLastName}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Spouse Work Address */}
        <div className="location-box">
          <h3>Spouse Work Address</h3>
          <label className="form-label">
            Street Address:
            <input
              type="text"
              name="spouseWorkAddress.streetAddress"
              value={formData.spouseWorkAddress.streetAddress}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Street Address 2:
            <input
              type="text"
              name="spouseWorkAddress.streetAddress2"
              value={formData.spouseWorkAddress.streetAddress2}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="spouseWorkAddress.city"
              value={formData.spouseWorkAddress.city}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            State:
            <input
              type="text"
              name="spouseWorkAddress.state"
              value={formData.spouseWorkAddress.state}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Postal/Zip Code:
            <input
              type="text"
              name="spouseWorkAddress.postalCode"
              value={formData.spouseWorkAddress.postalCode}
              onChange={handleChange}
              className="form-input"
            />
          </label>
        </div>

        {/* TODO: Add a list of vehicle makes */}
        {/* Preferred Vehicle Make */}
        <label className="form-label">
          Preferred Vehicle Make
          <input
            type="text"
            name="makePreference"
            value={formData.makePreference}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* TODO: Add a list of vehicle models */}
        {/* Preferred Vehicle Model */}
        <label className="form-label">
        Preferred Vehicle Model
          <input
            type="text"
            name="modelPreference"
            value={formData.modelPreference}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* TODO: Add a list of vehicle years 2000-Current */}
        {/* Preferred Vehicle Year */}
        <label className="form-label">
          Preferred Vehicle Year
          <input
            type="text"
            name="yearPreference"
            value={formData.yearPreference}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Submit Button Field */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
