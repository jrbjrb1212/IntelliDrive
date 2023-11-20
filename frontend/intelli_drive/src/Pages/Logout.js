import React from 'react';
import './PagesCSS/Logout.css';

const Logout = () => {
  return (
    <div className="logout-container">
        <h1>Logout</h1>
        <p>Thank you for using our service! You have been successfully logged out.</p>
        <button className="logout-button" onClick={() => window.location.href = '/Forms'}>Go back to Forms</button>
    </div>
  );
};

export default Logout;
