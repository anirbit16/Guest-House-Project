import React, { useState,useEffect} from 'react';
 
import PricingImg1 from "../../assets/PricingImg1.jpg";
import PricingImg2 from "../../assets/PricingImg2.jpg";
import PricingImg3 from "../../assets/PricingImg3.jpg";
import axios from 'axios';
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Navbar from './Navbar';

const PricingPage = () => {
  const [data, setData] = useState(null);
  const [showsignupmodal, setShowSignUpModal] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [propertyname, setPropertyName] = useState('');
  const [propertyaddress, setPropertyAddress] = useState('');
  const [noofproperties, setNoOfProperties] = useState('');
  const [ownername, setOwnerName] = useState('');
  const [ownercontactno, setOwnerContactNo] = useState('');
  const [emailID, setEmailID] = useState('');
  const [gst, setGST] = useState('');
  const [pan, setPAN] = useState('');
  const [numberofrooms, setNumberOfRooms] = useState('');
  const [selectedplan, setSelectedPlan] = useState('');
  const [showloginmodal,setShowLoginModal] = useState('');
  const [admins, setAdmins] = useState([]);
  const [userData, setUserData] = useState([]);

  const featureBox1 = [
    "10 users included",
    "2 GB of storage",
    "Email support",
    "Help center access"
  ];
  const featureBox2 = [
    "20 users included",
    "10 GB of storage",
    "Priority email support",
    "Help center access"
  ];
  const featureBox3 = [
    "30 users included",
    "15 GB of storage",
    "Phone and email support",
    "Help center access"
  ];
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        // 'http://192.168.1.8:8080/admins/getAllAdmins'
        const response = await axios.get(get_actual);
        setAdmins(response.data); // Assuming response.data is the array of admins
      } catch (err) {
         // Handle any errors here
        console.error("Error fetching admins:", err);
      }
    };

    fetchAdmins(); // Call the async function
  }, []);

 

  const plans = [
    { title: "Silver", price: 500, feature: featureBox1, btnTitle: "Sign up", btnClass: "btn-outline-primary" },
    { title: "Gold", price: 1000, feature: featureBox2, btnTitle: "Sign Up", btnClass: "btn-primary" },
    { title: "Business", price: 1500, feature: featureBox3, btnTitle: "Sign Up", btnClass: "btn-primary" }
  ];

 const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      user_name: username,
      password: password,
      property_name: propertyname,
      property_address: propertyaddress,
      owner_name: ownername,
      owner_contact_no: ownercontactno,
      email_id: emailID,
      plan: selectedplan,
      properties: noofproperties,
      gst: gst,
      pan: pan,
    };
    console.log(data);
    // console.log("ABCDEFGH")
    try {
      // 'http://192.168.1.8:8080/admins/addAdmin'
      const response = await axios.post(post_actual, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      // Reset form fields
      setUserName('');
      setPassword('');
      setPropertyName('');
      setPropertyAddress('');
      setNoOfProperties('');
      setOwnerName('');
      setOwnerContactNo('');
      setEmailID('');
      setGST('');
      setPAN('');
      setSelectedPlan('');
      setShowSignUpModal(false);
    } catch (error) {
      console.error('Signup error:', error);
      alert(`Signup failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleSignUpClick = (pln) => {
    setSelectedPlan(pln);
    setShowSignUpModal(true); // Open modal when a plan is clicked
  };
    // Route Variables
  const get_actual = 'http://192.168.1.8:8080/admins/getAllAdmins'
  const get_mock = 'http://localhost:3000/admins'
  const post_actual = 'http://192.168.1.8:8080/admins/addAdmin'
  const post_mock =   'http://localhost:3000/admins'
  


  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <section className="hero">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={PricingImg1} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolores.</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={PricingImg2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing.</h5>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={PricingImg3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="pricingheader">
  <div className="pricing-header" style={{fontFamily:'Poppins'}}>
    <h1 style={{fontFamily:'20px'}}>Choose Your Subscription Plan</h1>
     
    <p  style={{fontFamily:'15px'}}>Join over 1,000,000+ users and hundreds of room management 
        businesses already benefiting from 60+ premium-only features. 
        Access your subscription from any computer, phone, 
        or tablet to streamline room scheduling, optimize occupancy, 
        and enhance operational efficiency.</p>
        </div>
  
</section>

      {/* Pricing Plan Cards */}
      <section className="pricing-cards">
        <div className="card-deck mb-3 text-center" style={{fontFamily:'Poppins'}}>
          {plans.map((plan, index) => (
            <div key={index} className="card mb-4 shadow-sm">
              <div 
                className="card-header" 
                style={{ color:"#FFFDDD",
                  backgroundColor: 
                    plan.title === 'Silver' ? 'silver' : 
                    plan.title === 'Gold' ? 'gold' : 
                    plan.title === 'Business' ? '#006699' : 'defaultColor' 
                }}
              >
                <h4 className="my-0 font-weight-normal">{plan.title}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title" style={{fontSize:'25px'}}>
                  Rs.{plan.price} <small className="text-muted">/ mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.feature.map((data, idx) => (
                    <li key={idx}>{data}</li>
                  ))}
                </ul>
                <button type="button" className="btn btn-primary  me-auto" onClick={() => {setShowSignUpModal; handleSignUpClick(plan.title);}}>
                  {plan.btnTitle}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Sign Up Modal */}
      <section className="signupoptions">
      <Modal show={showsignupmodal} onHide={() => setShowSignUpModal(false)} centered>
          <Modal.Header closeButton style={{backgroundColor:'',color:''}}>
            <Modal.Title>Sign up for {selectedplan} your plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} style={{ paddingBottom: '5px' }}>
              {/* Username Field */}
              <Form.Group as={Row} controlId="formUserName" className="mb-3">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
            
               
              
              
              
              
              {/* Property Name Field */}
              <Form.Group as={Row} controlId="formPropertyName" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Property Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter property name"
                    value={propertyname}
                    onChange={(e) => setPropertyName(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Property Address Field */}
              <Form.Group as={Row} controlId="formPropertyAddress" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Property Address
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter property address"
                    value={propertyaddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Owner Name Field */}
              <Form.Group as={Row} controlId="formOwnerName" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Owner Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter owner name"
                    value={ownername}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Owner Contact No Field */}
              <Form.Group as={Row} controlId="formOwnerContactNo" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Owner Contact No
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter owner contact number"
                    value={ownercontactno}
                    onChange={(e) => setOwnerContactNo(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Email ID Field */}
              <Form.Group as={Row} controlId="formEmailID" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Email ID
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email ID"
                    value={emailID}
                    onChange={(e) => setEmailID(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

            
              {/* PAN Field */}
              <Form.Group as={Row} controlId="formPAN" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  PAN
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter PAN number"
                    value={pan}
                    onChange={(e) => setPAN(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
               {/* GST Field */}
               <Form.Group as={Row} controlId="formPAN" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  GST
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter PAN number"
                    value={gst}
                    onChange={(e) => setGST(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Number of Rooms Field */}
              <Form.Group as={Row} controlId="formNumberOfRooms" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Number of Rooms
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="number"
                    placeholder="Enter number of rooms"
                    value={numberofrooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

            
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" type="submit" className="mt-2" style={{justifyContent:'flex-start',alignItems:''}} onClick={handleSubmit}>
                Sign Up
              </Button>
            <Button variant="danger"  className="mt-2" onClick={() => setShowSignUpModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </section>

       {/* Log in Modal */}
      <section className="loginoptions">
      <Modal show={showloginmodal} onHide={() =>setsH(false)} centered>
          <Modal.Header closeButton style={{backgroundColor:'',color:''}}>
            <Modal.Title>Login </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} style={{ paddingBottom: '5px' }}>
              {/* Username Field */}
              <Form.Group as={Row} controlId="formUserName" className="mb-3">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
              {/* Number of properties */}
              <Form.Group as={Row} controlId="formNumberOfProperty" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Number of Properties
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter  number of properties"
                    value={noofproperties}
                    onChange={(e) => setNoOfProperties(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
              
              
              
              
              {/* Property Name Field */}
              <Form.Group as={Row} controlId="formPropertyName" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Property Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter property name"
                    value={propertyname}
                    onChange={(e) => setPropertyName(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Property Address Field */}
              <Form.Group as={Row} controlId="formPropertyAddress" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Property Address
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter property address"
                    value={propertyaddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Owner Name Field */}
              <Form.Group as={Row} controlId="formOwnerName" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Owner Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter owner name"
                    value={ownername}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Owner Contact No Field */}
              <Form.Group as={Row} controlId="formOwnerContactNo" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Owner Contact No
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter owner contact number"
                    value={ownercontactno}
                    onChange={(e) => setOwnerContactNo(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

              {/* Email ID Field */}
              <Form.Group as={Row} controlId="formEmailID" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Email ID
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="email"
                    placeholder="Enter email ID"
                    value={emailID}
                    onChange={(e) => setEmailID(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>
 
          

              {/* Number of Rooms Field */}
              <Form.Group as={Row} controlId="formNumberOfRooms" className="mb-3">
                <Form.Label column sm={4} className="text-sm-end">
                  Number of Rooms
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="number"
                    placeholder="Enter number of rooms"
                    value={numberofrooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    required
                  />
                </Col>
              </Form.Group>

            
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" type="submit" className="mt-2" style={{justifyContent:'flex-start',alignItems:''}} onClick={handleSubmit}>
                Sign Up
              </Button>
            <Button variant="danger"  className="mt-2" onClick={() => setShowSignUpModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </section>



       

       
    </>
  );
};

export default PricingPage;
