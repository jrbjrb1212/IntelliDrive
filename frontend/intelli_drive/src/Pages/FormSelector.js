import React from 'react';
import './PagesCSS/Forms.css'

const FormSelector = ({ handleOptionChange, options, selectedOption }) => {
  return (
    <div className="form-selector">
      <h2>Form Selector</h2>
      <form>
        {options.map((option) => (
          <div className="radio-item" key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleOptionChange(option.value)}
              id={option.value} // Assign unique IDs to labels and inputs
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormSelector;