import React, { useState } from 'react';
import BelkhiterPic from '../Images/.Belkhiter.jpg'


const Belkhiter = () => {
  return (
    <div>
        <img src={BelkhiterPic} alt="Belkhiter should be here"/>
        <p>How did you even get here?</p>
        <p>Anyways,</p>
        <p>You found an easter egg</p>
    </div>
  );
};

export default Belkhiter;