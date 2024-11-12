import React from 'react';
import './LandingPage.css';
import Contactus2 from "../../assets/Contactus2.jpg";
import Contactus3 from "../../assets/Contactus3.jpg";
import Contactus4 from "../../assets/Contactus4.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';
 
import { Col, Row, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      {/* Header Banner */}
      {/* 
      <section className='hero'>
        <div className='container'>         
          <div className="heading">
            <h1>Effortless Room Management, Simplified</h1>
          </div>
        </div>
      </section> 
      */}
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
              <img src={Contactus2} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Let's Connect!</h5>
                <p> "Sed ut perspiciatis unde omnis</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Contactus3} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Lorem ipsum dolor sit.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, est?</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Contactus4} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel!</p>
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
         {/* Address and Form */}
        <section className="addressandform">
        <h2 className="common-heading" style={{fontFamily:'Poppins'}}>Contact us</h2>

                {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                <div className="container">
                <Row className="mb-5 mt-3">
                  <Col lg="8">
                    {/* <h1 className="display-4 mb-4">Contact Me</h1> */}
                    <hr className="t_border my-4 ml-0 text-left" />
                  </Col>
                </Row>
                <Row className="sec_sp">
                <Col lg="5" className="mb-5 text-start" style={{fontFamily:'Poppins',fontSize:'20px'}}> {/* Added text-start for left alignment */}
                  {/* <h1 className="color_sec py-4" style={{fontSize:'20px'}}>Get in touch</h1> */}

                  <div className="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <span className="icon-wrapper">
                    <i class="bi bi-geo-alt flex-shrink-0" style={{fontSize:'20px'}}></i>
                      </span>
                    <div>
                       {/* <h3>Address</h3> */}
                         <p>in Street No. 1111 (Major Arterial Road Mouza – Noapara), J.L, Plot No. IID/31/1,, NH12, Newtown, Kolkata, West Bengal 700156</p>
                    </div>
                    </div>
                    <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                    <span className="icon-wrapper">
                    <i class="bi bi-telephone flex-shrink-0" style={{fontSize:'20px'}}></i>
                    </span>
                        <div>
                          {/* <h3>Call Us</h3> */}
                          <p style={{paddingTop: '5px'}}>+91 9163227342</p>
                        </div>
                      </div>
                      <div class="info-item d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                      <span className="icon-wrapper">
                        <i class="bi bi-envelope flex-shrink-0"  style={{fontSize:'20px'}}></i>
                      </span>
                          <div>
                            {/* <h3>Email Us</h3> */}
                            <p style={{paddingTop: '5px'}}>connect@vucspvtltd.com</p>
                          </div>
                        </div>


                  {/* <h3 style={{fontSize:'15px'}}> <i className="bi bi-geo-alt"></i>Address</h3>
                  <p  style={{fontSize:'12px'}}>in Street No. 1111 (Major Arterial Road Mouza – Noapara),</p>
                  <p  style={{fontSize:'12px'}}>J.L, Plot No. IID/31/1</p>
                  <p  style={{fontSize:'12px'}}>NH12, Newtown, Kolkata, West Bengal 700156 </p>
                  <h3 style={{fontSize:'15px'}}><i className="bi bi-telephone"></i>Call Us</h3>
                  <p style={{fontSize:'12px'}}>+91 9163227342</p>
                  <h3 style={{fontSize:'15px'}}><i className="bi bi-envelope-at"></i>Email Us</h3>
                  <p style={{fontSize:'12px'}}>connect@vucspvtltd.com</p> */}
                     
                     
                    {/* <address>
                      <strong>Email:</strong>{" "}
                      <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                        {contactConfig.YOUR_EMAIL}
                      </a>
                      <br />
                      <br />
                      {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                        <p>
                          <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                        </p>
                      ) : (
                        ""
                      )}
                    </address> */}
                    
                    {/* <p>
                      ABCDEFG */}
                      {/* {contactConfig.description} */}
                      {/* </p> */}
                  </Col>
                  <Col lg="7" className="d-flex align-items-center">
                    <form className="contact__form w-100">
                      <Row>
                        <Col lg="6" className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name" 
                            type="text"
                            required 
                            style={{height:'0.1em'}}
                          />
                        </Col>
                        <Col lg="6" className="form-group">
                          <input
                            className="form-control rounded-0"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email" 
                            required 
                            style={{height:'0.1em'}}
                            
                          />
                        </Col>
                      </Row>
                      <input
                            className="form-control"
                            id="subject"
                            subject="subject"
                            placeholder="Subject" 
                            type="text"
                            required 
                            style={{height:'0.1em'}}
                            
                          />
                      <textarea
                        className="form-control rounded-0"
                        id="message"
                        name="message"
                        placeholder="Message"
                        rows="5" 
                        required
                       
                         
                      ></textarea>
                      <br />
                      <Row>
                        <Col lg="12" className="form-group">
                          <button className="btn" style={{color:'#FFFFFF',backgroundColor:'#006699'}}type="submit"> 
                            Send
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </Col>
                </Row>
              </div>
                            
 


        </section>

    </>
  );
};

export default ContactUs;
