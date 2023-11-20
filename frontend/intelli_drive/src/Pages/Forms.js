import React, { useState } from 'react';
import '../Images/Images.css'
import logo from '../Images/logo_test.png'
import "./PagesCSS/Forms.css"
import FormSelector from './FormSelector'
import FormRenderer from './FormRenderer'


const Forms = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);


  const options = [
    { value: 'userSettings', label: 'User Settings' },
    { value: 'planRide', label: 'Plan Ride' },
    { value: 'rideReservation', label: 'Ride Reservation' },
    { value: 'scheduleReservation', label: 'Schedule Reservation' },
    { value: 'viewRides', label: 'View Booked Rides' },
  ];

  const mapOptionToForm = (optionValue) => {
    switch (optionValue) {
      case 'form1':
        return 'form1'; // Update to match the format expected by FormRenderer
      case 'form2':
        return 'form2';
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
        return 'Form 2'; // Default to a specific form type if needed
    }
  };

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    const mappedFormType = mapOptionToForm(optionValue);
    if (mappedFormType) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const storedUserID = localStorage.getItem('userID');
  console.log("UserID:", storedUserID);
  return (
    <div>
      <div>
        <img src={logo} alt="Logo should be here" className="logo"/>
      </div>
      <div className="forms-container">
        {/* <h1>File Your Forms</h1> */}
        <div className="box-outline">
          <FormSelector
            handleOptionChange={handleOptionChange}
            options={options}
            selectedOption={selectedOption}
          />
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <FormRenderer formType={mapOptionToForm(selectedOption)} closeModal={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>

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