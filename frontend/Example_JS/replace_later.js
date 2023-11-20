import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import Forms from './Pages/Forms';
import Logout from './Pages/Logout'
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login/>}/>
          <Route exact path = "/Login" element={<Login/>}/>
          <Route exact path = "/Forms" element={<Forms/>}/>
          <Route exact path = "/Logout" element={<Logout/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
