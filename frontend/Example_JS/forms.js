import React, { useState } from 'react';
import '../Images/Images.css'
import logo from '../Images/logo_test.png'
import FormSelector from './FormSelector'

const Forms = () => {
  const [isExpanded, setIsExpanded] = useState('');

  const toggleSection = (section) => {
    setIsExpanded(isExpanded === section ? '' : section);
  };

    

  return (
    <div>
        <div> 
            <img src={ logo } alt="Logo should be here" className="logo"/>
        </div>
        <div className="forms-container">
        <h1>File Your Forms</h1>
        
        <div className="box-outline">
          <div className="form-section">
            <h2 onClick={() => toggleSection('formSelector')}>Form Selector</h2>
            {isExpanded === 'formSelector' && <FormSelector />}
          </div>
        </div>

        <div className="box-outline">
          <div className="form-section">
            <h2 onClick={() => toggleSection('formView')}>Form Viewer</h2>
            {isExpanded === 'formView' && <FormSelector />}
          </div>
        </div>
      </div>

        <button onClick={() => window.location.href = '/Login'}>Go back to Login</button>
        <button onClick={() => window.location.href = '/Logout'}>Go to Logout</button>
    </div>
  );
};

export default Forms;