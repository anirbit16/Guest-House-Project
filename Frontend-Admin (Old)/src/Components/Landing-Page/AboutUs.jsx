import React, { useState } from 'react';
import './LandingPage.css';
import CarouselImg1 from "../../assets/CarouselImg1.jpg";
import CarouselImg2 from "../../assets/CarouselImg2.jpg";
import CarouselImg3 from "../../assets/CarouselImg3.jpg";
import Aboutusimg from "../../assets/Aboutusimg.jpg";
import Whychooseus from "../../assets/Whychooseus.jpeg";
import Ourexpertise from  "../../assets/Ourexpertise.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap.min.js';  
import Navbar from './Navbar';
 
const AboutUs = () => {


  return (
    <>
     {/* Header Banner */}
    {/* <section className='hero'>
        <div className='container'>         <div className="heading">
            <h1>Effortless Room Management, Simplified</h1>
        </div>
         
        </div>
      </section> */}
      
      <nav>
        <Navbar/>
      </nav>
     <section class="hero">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={CarouselImg1} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Seamless Room Management, Simplified.</h5>
              <p> Effortless control at your fingertips.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={CarouselImg2} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Maximize Space, Minimize Hassle.</h5>
              <p>Streamline room bookings in a single click.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={CarouselImg3} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Book, Manage, Relax.</h5>
              <p>Let our software do the heavy lifting.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</section>



 

      
      {/* Back-Container */}
      
     
      {/* About Us */}
      <section className='about'>
       
        
        <div className='container d-flex gap-3'>
            
          <div className='left row'>
          <div className="heading">
                 <span className='abtus' style={{fontSize:'20px'}}>About Us</span>
                <h1> Who We Are?</h1>
                <p>Check out our company story and work process</p>
          </div>

          <p>At RoomMaster, we started with a simple mission: to simplify the complexities of room management. Our journey began when we realized how outdated and cumbersome traditional systems were, often leading to missed bookings, overbookings, and inefficient space utilization.</p>


        <p>We believe that managing rooms should be effortless, and our platform is designed to provide exactly that: intuitive, flexible, and customizable solutions that cater to your unique needs.</p>
            <button className='btn2'>More About Us</button>
            <bi bi-check-all></bi>
          </div>
          <div className='right row'>
            <img src={Aboutusimg} alt='' />
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
       <section className='about'>
       
        
       <div className='container flex mtop'>
           
         <div className='left row' id="Why-choose-us">
          <img src={Whychooseus} alt='' id="whychooseusimg"/>
         </div>
         <div className='right row'>
           <div className="heading">
               
               <h1> Why choose us?</h1>
               <p>Check out why roommaster might be the best solution for your room or venue management needs.</p>
         </div>
           
          <h3 style={{fontSize:'15px'}}>User-Friendly Interface</h3>
          <p style={{fontSize:'12px'}}>Effortlessly manage bookings and room availability with an intuitive, easy-to-use interface that simplifies the entire room management process.</p>
          <h3 style={{fontSize:'15px'}}>Real-Time Availability Tracking</h3>
          <p style={{fontSize:'12px'}}>Stay updated with real-time room occupancy and availability, allowing quick decisions and seamless guest experiences.</p>
          <h3 style={{fontSize:'15px'}}>Comprehensive Reporting</h3>
          <p style={{fontSize:'12px'}}>Stay updated with real-time room occupancy and availability, allowing quick decisions and seamless guest experiences.</p>
          <h3 style={{fontSize:'15px'}}>Seamless Integration</h3>
          <p style={{fontSize:'12px'}}>Stay updated with real-time room occupancy and availability, allowing quick decisions and seamless guest experiences.</p>
          <h3 style={{fontSize:'15px'}}>Automated Notifications</h3>
          <p style={{fontSize:'12px'}}>Send instant notifications to staff and guests for room bookings, cancellations, and reminders, ensuring smooth communication.</p>
          <h3 style={{fontSize:'15px'}}>24/7 Support</h3>
          <p style={{fontSize:'12px'}}>Our dedicated customer support team is available round the clock to assist you with any queries or technical issues.</p>
          <h3 style={{fontSize:'15px'}}>Mobile Accessibility</h3>
          <p style={{fontSize:'12px'}}>Manage your rooms from anywhere with our mobile-friendly design, keeping you connected even on the go.</p>
 

       
         </div>
       </div>
     </section>
     {/* Our Expertise */}
     <section className='about'>
       
        
       <div className='container d-flex gap-3'>
           
         <div className='left row'>
         <div className="heading">
                <span className='abtus' style={{fontSize:'20px'}}>Our Expertise</span>
               <h1>Check our expertise</h1>
               
         </div>
         <h3 style={{fontSize:'15px'}}>Room Management</h3>
         <p style={{fontSize:'12px'}}>Efficiently manage room availability, assignments, and maintenance schedules with a centralized system that ensures optimal room utilization and quick turnarounds between bookings.</p>
         <h3 style={{fontSize:'15px'}}>Customer Management</h3>
         <p style={{fontSize:'12px'}}>Keep track of guest profiles, preferences, booking history, and special requests with ease. RoomMaster enables personalized guest experiences by maintaining detailed customer records and communication logs.</p>
         <h3 style={{fontSize:'15px'}}>Booking and Reservation Management</h3>
         <p style={{fontSize:'12px'}}>Handle all aspects of reservations, including bookings, cancellations, and modifications. Our system allows both direct and third-party booking integrations, providing a seamless experience for guests and property managers alike.</p>
         <h3 style={{fontSize:'15px'}}>Inventory and Resource Management</h3>
         <p style={{fontSize:'12px'}}>Track and manage inventory, such as room supplies, toiletries, and other amenities. Stay informed about low stock levels and avoid shortages that may impact guest experience.</p>
         <h3 style={{fontSize:'15px'}}>Billing and Payment Processing</h3>
         <p style={{fontSize:'12px'}}>Generate accurate invoices, handle multiple payment methods, and process payments securely. RoomMaster integrates with leading payment gateways to streamline billing and financial management.</p>
         <h3 style={{fontSize:'15px'}}>Housekeeping and Maintenance Management</h3>
         <p style={{fontSize:'12px'}}>Manage housekeeping schedules, assign tasks to staff, and monitor room readiness in real-time. Ensure timely maintenance by tracking repair requests and overseeing task completion to enhance guest satisfaction.</p>
         <h3 style={{fontSize:'15px'}}>Multi-Property Management</h3>
         <p style={{fontSize:'12px'}}>If you manage multiple properties, RoomMaster enables centralized control across locations, making it easier to oversee bookings, staff assignments, and operational tasks across different sites.</p>
         <h3 style={{fontSize:'15px'}}>Reporting and Analytics</h3>
         <p style={{fontSize:'12px'}}>Generate detailed reports on room occupancy, revenue, customer preferences, and operational efficiency. Make informed decisions with data-driven insights that help you optimize room availability and boost profitability.</p>
         

         
         </div>
         <div className='right row'>
           <img src={Ourexpertise} alt='' />
         </div>
         {/* Select Your Package */}
       </div>
     </section>
     

      
    </>
  )
}

export default AboutUs;