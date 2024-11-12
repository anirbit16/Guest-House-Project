import { React, useState } from 'react';
import './Dashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Users from './Users';
import { Routes, Route } from 'react-router-dom';
import Rooms from './Rooms';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };


  return (
      <div className="dashandside">
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Home/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users-page" element={<Users />} />
          <Route path="/rooms-page" element={<Rooms />} />
        </Routes>
      </div>
      </div>
 
  );
}

export default Dashboard;
