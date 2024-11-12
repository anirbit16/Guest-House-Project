import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Navbar'; // Common Navbar component
import './LandingPage.css'; // Landing page styles
import { Outlet, useLocation } from 'react-router-dom';

const LandingPage = () => {
  const location = useLocation();

  // Check if the current path includes '/dashboard-section'

  const isDashboardRoute = location.pathname.startsWith('/dashboard-section/*');
  const isUsersPage = location.pathname.startsWith('/dashboard-section/users-page');
 
 
  return (
    <div>
      {/* Shared Navbar */}
    
      
      
       
      {/* The Outlet will render the child components based on the route */}
      <div className="content"> 
        <Outlet />
      </div>
      
      {/* You can also include a Footer or other shared components here */}
    </div>
  );
}

export default LandingPage;
