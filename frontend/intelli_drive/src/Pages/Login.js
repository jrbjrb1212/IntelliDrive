import React, { useState } from 'react';
import './PagesCSS/Login.css';
import '../Images/Images.css'
import logo from '../Images/logo_test.png'
import FormRenderer from './FormRenderer'

// TODO: Verify that the user is in our document store via a GET request
//   - If user is not verified give incorrect loi
function handleFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // TODO: Wrap in a try-catch
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    if (username.trim() !== '' && password.trim() !== '') {
        const userID  = "1234";
        localStorage.setItem('userID', userID);
        console.log()
        window.location.href = '/Forms';
    } else {
        // Handle the case where fields are empty
        console.log('Fields are not empty. Please fill in both fields.');
    }
}

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCreateAccount = () => {
    setShowModal(true);
    // Implement logic to handle account creation
    console.log('Redirect or logic for account creation');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
      <div>
          <div>
              <img src={logo} alt="Logo should be here" className="logo" />
          </div>
          <div className="login-container">
              <h2>Login</h2>
              <form className="login-form" onSubmit={handleFormSubmission}>
                  <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input type="text" id="username" name="username" placeholder="Enter your username" required />
                  </div>

                  <div className="form-group">
                      <label htmlFor="password">Password:</label>
                      <input type="password" id="password" name="password" placeholder="Enter your password" required />
                  </div>

                  <button type="submit">Login</button>
                  <button onClick={handleCreateAccount}>Create Account</button>
              </form>
          </div>
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <FormRenderer formType='userSettings' closeModal={closeModal}/>
              </div>
            </div>
          )}
      </div>
  );
};

export default Login;