import React,{useState} from 'react';
 
import './index.css';
 
 
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PricingPage from './Components/PricingPage';
import Footer from './Components/Footer.jsx'
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Intro from './Components/Intro.jsx';
import OurPlans from './Components/OurPlans.jsx';
import SignUpForm from './Components/SignUpForm.jsx';
import PropertyDetailsOne  from './Components/PropertyDetailsOne.jsx';
import TandC from './Components/TandC.jsx';
import Privacy from './Components/Privacy.jsx';
import ProfileDetails from './Components/ProfileDetails.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
};

// Component to handle routes and conditionally render Navbar/Footer
const RouterContent = () => {
  const location = useLocation();

  // Paths where Navbar and Footer should be hidden
  const hideNavbarFooter = location.pathname === '/profile-details';

  return (
    <>
      {!hideNavbarFooter && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/pricing-page' element={<PricingPage />} />
        <Route path='/intro-page' element={<Intro />} />
        <Route path='/our-plans' element={<OurPlans />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/property-details' element={<PropertyDetailsOne />} />
        <Route path='/t-and-c' element={<TandC />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/profile-details' element={<ProfileDetails />} />
      </Routes>
      {!hideNavbarFooter && <Footer />} {/* Conditionally render Footer */}
    </>
  );
};

export default App;

 
