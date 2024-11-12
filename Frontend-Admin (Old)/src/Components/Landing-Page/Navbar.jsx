import { useState, React } from 'react';
import './LandingPage.css';
import vucs_logo from '../../assets/vucs_logo.png'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';



const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const post_actual = 'http://192.168.1.8:8080/admins/login'
  const post_mock =   'http://localhost:3001/login'
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if(!username || !userPassword){
     alert('Please enter both username and password')
    }
    try {
      // 'http://localhost:3001/login'
      const response = await axios.post(post_actual, {
        user_name: username,
        password: userPassword,
      });
      console.log("Login successful:", response.data);
      alert("Login Successfull");
      // Handle success (e.g., redirect or show a success message)
      setShowLoginModal(false); // Close the modal after successful login
      navigate('/dashboard-section'); 
    } catch (error) {
       alert("Sign Up First or log-in with the appropriate Credentials");
      console.error("Login error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
    console.log("Log In Clicked");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark py-3" style={{ color: 'white' }}>
        <div className="container-fluid">
          {/* Logo */}
          <a onClick={() => navigate('/promo-page')}>
            <img src={vucs_logo} alt="Brand Logo" style={{ height: '50px',marginLeft:'20px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left Section */}
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="/about-us">About Us</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="/contact-us">Contact Us</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="/contact-us">Support</a>
              </li>
              {/* <li className="nav-item px-2">
                <a className="nav-link" aria-current="page" href="/payment-page">Payment Page</a>
              </li> */}
            </ul>

            

            {/* Right Section */}
            <ul className="navbar-nav"> 
              <li className="nav-item" style={{ border: '2px solid yellow', borderRadius: '5px', borderWidth: '0.2px', marginRight: '100px' }}>
                <a className="nav-link" href="/pricing-page">Subscribe Now</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" onClick={handleLoginClick}>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="loginoption">
        <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
          <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} style={{ paddingBottom: '5px' }}>
              {/* Email Field */}
              <Form.Group as={Row} controlId="formEmail" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Username
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Password Field */}
              <Form.Group as={Row} controlId="formPassword" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Password
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" className="mt-2" onClick={handleSubmit}>
              Log In
            </Button>
            <Button variant="danger" className="mt-2" onClick={() => setShowLoginModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

export default Navbar;
