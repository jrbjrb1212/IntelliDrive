import React, { useState, useEffect } from 'react';
import '../PagesCSS/Forms.css';

const ViewRides = ({ closeModal }) => {
  const [scheduledRides, setScheduledRides] = useState([]);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [rideToConfirm, setRideToConfirm] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); // New state for the selected radio option

  const handleSubmit = (e) => {
    // e.preventDefault();
    //TODO: Send data to an API
    closeModal();
  };

  function timeStringToMinutes(timeString) {
    const [time, period] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
  
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
  
    return hours * 60 + minutes;
    }


  // Simulating fetching ride data from an API or storage
  useEffect(() => {
    // Replace this with your logic to fetch ride data from your backend
    const fetchScheduledRides = async () => {
      try {
        // Fetch ride data from your API or storage
        // For example:
        // const response = await fetch('your_api_endpoint');
        // const data = await response.json();
        // setScheduledRides(data);

        // Simulated data for demonstration purposes
        const simulatedData = [
            { id: 5, date: '2023-12-08', time: '12:00 PM', pickup: 'Location I', dropOff: 'Location J' },
            { id: 1, date: '2023-11-25', time: '10:00 AM', pickup: 'Location A', dropOff: 'Location B' },
            { id: 2, date: '2023-11-28', time: '02:30 PM', pickup: 'Location C', dropOff: 'Location D' },
            { id: 3, date: '2023-12-02', time: '09:15 AM', pickup: 'Location E', dropOff: 'Location F' },
            { id: 4, date: '2023-12-05', time: '04:45 PM', pickup: 'Location G', dropOff: 'Location H' },
            { id: 6, date: '2023-12-05', time: '04:46 PM', pickup: 'Location G', dropOff: 'Location H' },
            // Add more ride objects as needed
          ];
        
        // Custom sort function of the ride data
        const sortedRides = simulatedData.sort((rideA, rideB) => {
            const dateA = rideA.date.split('-').map(Number);
            const dateB = rideB.date.split('-').map(Number);
            if (dateA[0] !== dateB[0])
                return (dateA[0] < dateB[0]) ? -1 : 1;
            else if (dateA[1] !== dateB[1])
                return (dateA[1] < dateB[1]) ? -1 : 1;
            else if (dateA[2] !== dateB[2])
                return (dateA[2] < dateB[2]) ? -1 : 1;
            
            const timeA = timeStringToMinutes(rideA.time);
            const timeB = timeStringToMinutes(rideB.time);
            return (timeA < timeB) ? -1 : 1;
        });
         
          
        setScheduledRides(sortedRides);
      } catch (error) {
        console.error('Error fetching scheduled rides:', error);
      }
    };

    fetchScheduledRides();
  }, []);

  const removeRide = (id) => {
    const updatedRides = scheduledRides.filter((ride) => ride.id !== id);
    setScheduledRides(updatedRides);
    setRideToConfirm(null);
    setDisplayConfirmation(false);
  };
  
  const confirmRemoveRide = (ride) => {
    setRideToConfirm(ride);
    setDisplayConfirmation(true);
  };

  const handleOptionChange = (event) => {
    event.persist();
    const value = event.target.value;
    setSelectedOption(value);
    console.log(value);
    if (value === "Yes") {
      removeRide(rideToConfirm.id);
      setRideToConfirm(null);
      setDisplayConfirmation(false);
      setSelectedOption("");
    } else if (value === "No") {
      setRideToConfirm(null);
      setDisplayConfirmation(false);
      setSelectedOption("");
    }
  };

  

  return (
    <div>
      <h2>Scheduled Rides</h2>
      {displayConfirmation === true && (
        <div>
          <h2>Are you sure you want to cancel this ride?</h2>
          <div className="ride-card" key={rideToConfirm.id}>
            <p>Date: {rideToConfirm.date}</p>
            <p>Time: {rideToConfirm.time}</p>
            <p>Pickup: {rideToConfirm.pickup}</p>
            <p>Drop-off: {rideToConfirm.dropOff}</p>
          </div>
          <label className="form-label">
            <div className="form-dropdown">
              <select
                value={selectedOption}
                className="form-select"
                onChange={handleOptionChange}
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </label>
        </div>
      )}

      {displayConfirmation === false && (
        <div className="ride-cards-container">
        {scheduledRides.map((ride) => (
            <div className="ride-card" key={ride.id}>
                <p>Date: {ride.date}</p>
                <p>Time: {ride.time}</p>
                <p>Pickup: {ride.pickup}</p>
                <p>Drop-off: {ride.dropOff}</p>
                <button onClick={() => confirmRemoveRide(ride)}>X</button>
            </div>
        ))}
          <button type="submit" onClick={handleSubmit}>
            Done Viewing?
          </button>
        </div>
        )}
    </div>
  );
};

export default ViewRides;