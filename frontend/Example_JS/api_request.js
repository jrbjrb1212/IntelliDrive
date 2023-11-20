import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'

function App() {
  // const handleButtonClick = () => {
  //   console.log('Button clicked!');
  //   // You can add your logic here for what happens when the button is clicked
  // };
  const [apiResponse, setApiResponse] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/hello');
      
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      // const data = await response.json();
      const data = await response.text();
      console.log('Response from API:', response.status);
      console.log('Extracted message:', data);
      setApiResponse(data);

    } catch (error) {
      console.error('There was a problem with the request:', error);
      // Handle errors or display an error message to the user
    }
  };

  
  return (
    <div className="centered-div">
      <button onClick={handleButtonClick}>
        Click Me!
      </button>
      <p>
      {apiResponse ? `Response: ${apiResponse}` : 'Response goes here'}
      </p>
    </div>
  );
}

export default App;
