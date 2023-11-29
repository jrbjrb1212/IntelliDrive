import React from 'react';
import axios from 'axios';


/////////////////////////////
// Example Form Not in Use //
/////////////////////////////

const ExampleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic for FormOne
    };

    return (
        <div className="form-wrapper">
            <h2>Form One</h2>
            <form className="form" onSubmit={handleSubmit}>
                {/* Fields specific to Form One */}
                <label htmlFor="fieldOne">Field One:</label>
                <input type="text" id="fieldOne" name="fieldOne" required />

                {/* Add other fields for Form One */}
                
                <button type="submit">Submit Form One</button>
            </form>
        </div>
    );
};

export default ExampleForm;
