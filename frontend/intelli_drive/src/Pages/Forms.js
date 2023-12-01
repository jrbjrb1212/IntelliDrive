import React, { useState } from 'react';
import '../Images/Images.css'
import logo from '../Images/logo_test.png'
import "./PagesCSS/Forms.css"
import FormSelector from './FormSelector'
import FormRenderer from './FormRenderer'


const Forms = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);


  // Display the form type options and records what forms they are linked to
  const options = [
    { value: 'userSettings', label: 'User Settings' },
    { value: 'planRide', label: 'Plan Ride' },
    { value: 'rideReservation', label: 'Ride Reservation' },
    { value: 'scheduleReservation', label: 'Schedule Reservation' },
    { value: 'viewRides', label: 'View Booked Rides' },
  ];

  // Once a form is clicked, determine the keyvalue pair from options above
  const mapOptionToForm = (optionValue) => {
    switch (optionValue) {
      case 'userSettings':
        return 'userSettings';
      case 'rideReservation':
        return 'rideReservation';
      case 'planRide':
        return 'planRide';
      case 'scheduleReservation':
        return 'scheduleReservation';
      case 'viewRides':
        return 'viewRides';
      default:
        return 'NULL'; // Default to a specific form type if needed
    }
  };


  // Map a selected form to its correct form and display the overlay
  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    const mappedFormType = mapOptionToForm(optionValue);
    if (mappedFormType) {
      setShowModal(true);
    }
  };

  // If user selects to close the overlay, close it
  const closeModal = () => {
    setShowModal(false);
  };

  // TODO: Set up a unique userID that will be sent to all backend API requests
  // - similar to JSON webtokens without as much headache
  const storedUserID = localStorage.getItem('userID');
  console.log("UserID:", storedUserID);
  return (
    <div>
      {/* Company logo */}
      <div>
        <img src={logo} alt="Logo should be here" className="logo"/>
      </div>

      <div className="forms-container">
        <div className="box-outline">

          {/* Render the possible form options */}
          <FormSelector
            handleOptionChange={handleOptionChange}
            options={options}
            selectedOption={selectedOption}
          />

          {/* If a form is selected, created an overlay of the form */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {/* Map the form selected and then render it */}
                <FormRenderer formType={mapOptionToForm(selectedOption)} closeModal={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation buttons */}
      <button className="go-back-button" onClick={() => window.location.href = '/Login'}>
        Go back to Login
      </button>
      <button className="go-logout-button" onClick={() => window.location.href = '/Logout'}>
        Go to Logout
      </button>
    </div>
  );
};

export default Forms;