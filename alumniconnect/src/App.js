import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Components from the /components folder
import AlumniNavbar from './components/AlumniNavbar';  // Alumni Navbar
import AlumniRegistration from './components/AlumniRegistration';  // Alumni Registration
import AlumniLogin from './components/AlumniLogin';  // Alumni Login
import Home from './components/Home';

// Main App component
function App() {
  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <AlumniNavbar />
      {/* Container for the page content */}
      <div className="container mt-5">
        {/* Define Routes for each page */}
        <Routes>
          {/* Home route can be your Dashboard or any page */}
          <Route path="/" element={<Home />} /> 
          
          {/* Routes for Login and Registration */}
          <Route path="/login" element={<AlumniLogin />} />
          <Route path="/register" element={<AlumniRegistration />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Page or Dashboard (Optional)

export default App;
