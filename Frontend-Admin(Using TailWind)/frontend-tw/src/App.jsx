import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PricingPage from './Components/PricingPage';
import Footer from './Components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './Components/Intro.jsx';
import OurPlans from './Components/OurPlans.jsx';
import SignUpForm from './Components/SignUpForm.jsx';
import PropertyDetails from './Components/PropertyDetails.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Navbar outside of Routes */}
        <Routes>
          <Route path='/' element={<AboutUs />} /> 
          <Route path='/about-us' element={<AboutUs />} /> 
          <Route path='/contact-us' element={<ContactUs />} /> 
          <Route path='/pricing-page' element={<PricingPage />} /> 
          <Route path='/intro-page' element={<Intro/>} /> 
          <Route path='/our-plans' element={<OurPlans/>} /> 
          <Route path='/sign-up' element={<SignUpForm/>} /> 
          <Route path='/property-details' element={<PropertyDetails/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
