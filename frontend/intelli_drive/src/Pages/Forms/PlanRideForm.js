import React, { useState } from 'react';
import '../PagesCSS/Forms.css'

const PlanRideForm = ({ closeModal }) => {
  // State based storage of form data
  const [formData, setFormData] = useState({
    numberOfPassengers: 1,
    carpool: false,
    dateOfRide: '',
    hour: '',
    minute: '',
    period: '',
    pickupLocation: {
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
    },
    dropOffLocation: {
      streetAddress: '',
      streetAddress2: '',
      city: '',
      state: '',
      postalCode: '',
    },
  });

  // Handle update to a input field
  // Ex: Inputing the first name
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('pickupLocation') || name.startsWith('dropOffLocation')) {
      const [location, field] = name.split('.');
      setFormData((prevData) => ({
        ...prevData,
        [location]: {
          ...prevData[location],
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  // Handle submission of form 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //TODO: Send data to an API
    closeModal();
  };

  // Array of hours 1->12
  const hoursOptions = Array.from({ length: 12 }, (_, i) => (
    <option key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
      {(i + 1).toString().padStart(2, '0')}
    </option>
  ));

  // Array of minutes 0->59
  const minutesOptions = Array.from({ length: 60 }, (_, i) => (
    <option key={i} value={i.toString().padStart(2, '0')}>
      {i.toString().padStart(2, '0')}
    </option>
  ));

  return (
    <div className="box-outline">
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Ride Planner</h2>

        {/* Number passengers Field */}
        <label className="form-label">
          Number of Passengers:
          <input
            type="number"
            name="numberOfPassengers"
            value={formData.numberOfPassengers}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Carpool option Field */}
        <label className="form-label">
          Willingness to Carpool:
          <div className="form-checkbox">
            <input
              type="radio"
              name="carpool"
              value="Yes"
              checked={formData.carpool === 'Yes'}
              onChange={handleChange}
              className="form-radio"
            />
            <label>Yes</label>
            <input
              type="radio"
              name="carpool"
              value="No"
              checked={formData.carpool === 'No'}
              onChange={handleChange}
              className="form-radio"
            />
            <label>No</label>
          </div>
        </label>

        {/* Dates of Rides Field */}
        <label className="form-label">
          Date of Ride:
          <input
            type="date"
            name="dateOfRide"
            value={formData.dateOfRide}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        {/* Time of Ride Field */}
        <div className="time-of-ride">
          <label className="form-label">
            Time of Ride:
            <div className="time-picker">
              {/* Hour Field */}
              <select
                name="hour"
                value={formData.hour}
                onChange={handleChange}
                className="form-input time-select"
              >
                {hoursOptions}
              </select>

              {/* Minute Field */}
              <select
                name="minute"
                value={formData.minute}
                onChange={handleChange}
                className="form-input time-select"
              >
                {minutesOptions}
              </select>

              {/* AM/PM Field */}
              <select
                name="period"
                value={formData.period}
                onChange={handleChange}
                className="form-input time-select"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </label>
        </div>

        {/* Pick-Up Location */}
        <div className="location-box">
          <h3>Pickup Location</h3>
          <label className="form-label">
            Street Address:
            <input
              type="text"
              name="pickupLocation.streetAddress"
              value={formData.pickupLocation.streetAddress}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Street Address 2:
            <input
              type="text"
              name="pickupLocation.streetAddress2"
              value={formData.pickupLocation.streetAddress2}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="pickupLocation.city"
              value={formData.pickupLocation.city}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            State:
            <input
              type="text"
              name="pickupLocation.state"
              value={formData.pickupLocation.state}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Postal/Zip Code:
            <input
              type="text"
              name="pickupLocation.postalCode"
              value={formData.pickupLocation.postalCode}
              onChange={handleChange}
              className="form-input"
            />
          </label>
        </div>

        {/* Drop-off Location */}
        <div className="location-box">
          <h3>Drop-off Location</h3>
          <label className="form-label">
            Street Address:
            <input
              type="text"
              name="dropOffLocation.streetAddress"
              value={formData.dropOffLocation.streetAddress}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Street Address 2:
            <input
              type="text"
              name="dropOffLocation.streetAddress2"
              value={formData.dropOffLocation.streetAddress2}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            City:
            <input
              type="text"
              name="dropOffLocation.city"
              value={formData.dropOffLocation.city}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            State:
            <input
              type="text"
              name="dropOffLocation.state"
              value={formData.dropOffLocation.state}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <label className="form-label">
            Postal/Zip Code:
            <input
              type="text"
              name="dropOffLocation.postalCode"
              value={formData.dropOffLocation.postalCode}
              onChange={handleChange}
              className="form-input"
            />
          </label>
        </div>

        {/* Submit Button Field */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlanRideForm;
