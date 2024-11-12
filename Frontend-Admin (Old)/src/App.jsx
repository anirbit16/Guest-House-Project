import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from'./Components/Landing-Page/LandingPage.jsx'
import AboutUs from './Components/Landing-Page/AboutUs.jsx'
import ContactUs from './Components/Landing-Page/ContactUs.jsx'
import PricingPage from  './Components/Landing-Page/PricingPage.jsx';
import Navbar from  './Components/Landing-Page/Navbar.jsx';
import Dashboard from  './Components/Dashboard/Dashboard.jsx'
import Home from './Components/Dashboard/Home.jsx'
import Rooms from './Components/Dashboard/Rooms.jsx'
import Users from  './Components/Dashboard/Users.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing-page" element={<PricingPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} /> {/* Default route for dashboard */}
          <Route path="home" element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
