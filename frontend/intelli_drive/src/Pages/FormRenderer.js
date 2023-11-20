import React from 'react';
import UserProfile from './Forms/UserProfile';
import RideReservationForm from './Forms/RideReservationForm';
import ScheduleReservationForm from './Forms/ScheduleReservationForm'
import PlanRideForm from './Forms/PlanRideForm' 
import ViewRides from './Forms/ViewRides';
import "./PagesCSS/Forms.css";

const FormRenderer = ({ formType, closeModal }) => {
  const renderForm = () => {
    switch (formType) {
      case 'form1':
        return (
          <form>
            {/* Your Form 1 fields/components */}
            <input type="text" placeholder="Form 1 Field 1" />
            <input type="text" placeholder="Form 1 Field 2" />
            {/* Add other fields as needed */}
          </form>
        );
      case 'userSettings':
        return <UserProfile closeModal={closeModal} />;
      case 'rideReservation':
        return <RideReservationForm closeModal={closeModal} />;
      case 'planRide':
        return <PlanRideForm closeModal={closeModal} />;
      case 'scheduleReservation':
        return <ScheduleReservationForm closeModal={closeModal} />;
      case 'viewRides':
        return <ViewRides closeModal={closeModal} />;
      // Add cases for other form types if necessary
      default:
        return null;
    }
  };

  // Directly return the rendered form content
  return (
    <div>
      {renderForm()} {/* Render the form contents */}
    </div>
  );
  // console.log({formType});
  // return renderForm();
};

export default FormRenderer;
