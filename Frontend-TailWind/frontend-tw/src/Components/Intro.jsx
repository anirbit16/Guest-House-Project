import React from 'react';
import Aboutusimg from '../assets/Aboutusimg.jpg'
import Ourexpertise from '../assets/Ourexpertise.jpg'
import { Carousel } from "@material-tailwind/react";
import IntroC_1 from '../assets/IntroC_1.png'
import IntroC_2 from '../assets/IntroC_2.png'
import IntroC_3 from '../assets/IntroC_3.png'
import Intro_1 from '../assets/Intro_1.jpg';
import Intro_2 from '../assets/Intro_2.png';
import Intro_3 from '../assets/Intro_3.png';
import Intro_4 from '../assets/Intro_4.png';
import Intro_5 from '../assets/Intro_5.jpg';
import { FieldTimeOutlined,ImportOutlined,FundProjectionScreenOutlined,SettingOutlined,
  CloudSyncOutlined,FileProtectOutlined,CustomerServiceOutlined,ApiOutlined,StockOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import  {useNavigate} from 'react-router-dom'
import { Pagination } from 'swiper/modules';

const cardData = [
  {
    icon: <FieldTimeOutlined />, // Render the icon as a component
    title: "15",
    desc: "minutes saved per check-in"
  },
  {
    icon: <ImportOutlined />,
    title: "40",
    desc: "% increase in direct bookings"
  },
  {
    icon: <FundProjectionScreenOutlined />,
    title: "30",
    desc: "percent increase in RevPAG"
  },
];


const cardDataTwo = [
  {
   icon:<SettingOutlined />,
   content:"Advanced Booking Engine"
  },
  {
    icon:<CloudSyncOutlined/>,
    content:"Robust Cloud Storage"
  },
  {
    icon:<FileProtectOutlined />,
    content:"Strong Data Security"
  },
];


const cardDataThree = [
  {
   icon:<CustomerServiceOutlined/>,
   content:"Robust Customer Support"
  },
  {
    icon:<ApiOutlined/>,
    content:"3rd Party API Integration"
  },
  {
    icon:<StockOutlined />,
    content:"Versatile Business Insights"
  },
];
const cardDataFour = [
  {
    image: Intro_1,
    quote: "The automated reminders and notifications have significantly reduced double bookings and scheduling conflicts.",
    author: "~ A Roy",
    resort: "ABC Resort, Kalimpong",
    date: "Aug 18",
  },
  {
    image: Intro_2,
    quote: "This solution has streamlined our operations and enhanced customer satisfaction.",
    author: "~ B Singh",
    resort: "XYZ Resort, Darjeeling",
    date: "Sep 10",
  },
  {
    image: Intro_3,
    quote: "A great tool for our team to manage schedules effortlessly.",
    author: "~ C Gupta",
    resort: "LMN Resort, Gangtok",
    date: "Oct 5",
  },
];


const Intro = () => {
 
  return (
    <div>
       <section className="hero">
        <Carousel className="rounded-xl" autoplay="true" loop="true">
          <img
            src={IntroC_1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={IntroC_2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={IntroC_3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </section>
      <section className='about'>
        <div className='container d-flex gap-3'>
          <div className='left row'>
            <div className="heading">
              <h1>Get the complete oversight of your hotel operations</h1>
              <p>Reservations, cancellations, checking in-out or adding a new room - Manage everything in one place.</p>
            </div>
            <div className="introbuttons" style={{gap:'20px',display:'flex'}}>
            <button className='bg-transparent' style={{ border: '0.8px solid #006699', padding: '10px', borderRadius: '2em'}}>
              <span className='btntext' style={{ color: '#006699' }}>Start Free Trial</span>
            </button>

            <button className='bg-transparent' style={{ border: '0.8px solid #006699', padding: '10px', borderRadius: '2em' }}>
              <span className='btntext' style={{ color: '#006699' }}>Watch a demo</span>
            </button>
            </div>
          
          </div>
          <div className='right row'>
            <img src={Intro_1} alt='' />
          </div>
        </div>
      </section>
      
      <section className="facilities">
        <div className="container-heading" style={{ fontSize: '30px', justifyContent: 'center', display: 'flex', fontFamily: 'poppins', marginTop: '25px', marginBottom: '25px', fontWeight: '500' }}>
          <h1>RoomMaster: The all-rounder room management software</h1>
        </div>
        
        <div className="cards" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
          {cardData.map((item, index) => (
            <div key={index} className="card" style={{ marginRight: '10px', width: '20rem', height: '10rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden',color:'#006699'}}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2" style={{fontSize:'25px',display:'flex',justifyContent:'center',marginBottom:'25px'}}>{item.icon}</div>
                <div className="font-bold text-xl mb-2" style={{display:'flex',justifyContent:'center',fontSize:'50px'}}>{item.title}</div>
                <p className="text-gray-700 text-base" style={{display:'flex',justifyContent:'center',fontFamily:'poppins',color:'#006699'}}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
           <button className='btn2' style={{width:'12rem'}} >
            <a href="/about-us"> More About Us</a>
           </button>
           <bi bi-check-all></bi>
         </div>
         <div className='right row'>
           <img src={Aboutusimg} alt='' />
         </div>
       </div>
     </section>
   
      <section className='about'>
        <div className='container d-flex gap-3'>
          <div className='left row'>
           
            <img src={Intro_4} alt='' />
          </div>
          <div className='right row' style={{display:'block'}}>
            <div className="heading" style={{fontSize:'1.5rem',fontWeight:'500'}}>Comprehensive Property Management Software</div>
            <div className="text" syle={{marginBottom:'10px'}}>Reservations,cancellations,check-in or out,or adding a new room,manage everything at one place. </div>
   
            
          </div>
        </div>
      </section>

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



      <section className="features">
      <div className="cards" style={{justifyContent: 'center', paddingBottom: '50px',display:'flex' }}>
        <div className="section-1" style={{display:'flex'}}>
          {cardDataTwo.map((item, index) => (
            <div key={index} className="card" style={{ marginRight: '10px', width: '20rem', height: '7rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden',marginTop:'50px',border:'1px solid #006699'}}>
              <div className="px-6 py-4" style={{display:'flex',fontFamily:'poppins',border:'red',marginTop:'25px',justifyContent:'center',fontWeight:'500'}}>
              <div className="text-xl mb-2" style={{fontSize:'25px',display:'flex',justifyContent:'center',marginBottom:'25px',marginRight:'15px',color:'#006699'}}>{item.icon}</div>
                <div className="text-xl mb-2" style={{fontSize:'15px',display:'flex',justifyContent:'center',marginBottom:'25px'}}>{item.content}</div>
              </div>

               
            </div>
            
            
          ))}
          </div>


        


          
        </div>


        <div className="cards" style={{justifyContent: 'center', paddingBottom: '50px',display:'flex' }}>
        <div className="section-1" style={{display:'flex'}}>
          {cardDataThree.map((item, index) => (
            <div key={index} className="card" style={{ marginRight: '10px', width: '20rem', height: '7rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', overflow: 'hidden',marginTop:'50px',border:'1px solid #006699'}}>
              <div className="px-6 py-4" style={{display:'flex',fontFamily:'poppins',border:'red',marginTop:'25px',justifyContent:'center',fontWeight:'500'}}>
              <div className="text-xl mb-2" style={{fontSize:'25px',display:'flex',justifyContent:'center',marginBottom:'25px',marginRight:'15px',color:'#006699'}}>{item.icon}</div>
                <div className="text-xl mb-2" style={{fontSize:'15px',display:'flex',justifyContent:'center',marginBottom:'25px'}}>{item.content}</div>
              </div>

               
            </div>
            
            
          ))}
          </div>

          


        


          
        </div>

      </section>
      <section className="about">
      <div className='container d-flex gap-3'>
          <div className='left row'>
            <div className="heading">
              <h1>Maxmimize your potential with RoomMaster</h1>
              <p>A comprehensive, preconfigured, and ready for immediate use cloud-based PMS to seamlessly manage all types of properties. Scalable system provided by a single developer to support hoteliers in their day-to-day processes. 
                Just select the package you'd like to go with and get the most out of its strengths.</p>
            </div>
          
          </div>
          <div className='right row'>
            <img src={Intro_5} alt='' />
          </div>
        </div>

      </section>





      {/* <section className="customer-reviews" style={{marginTop:'100px',marginBottom:'100px'}}>

      <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      className="max-w-full mx-auto"
    >
      {cardDataFour.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto" style={{ width: '40em', justifyContent: 'center', display: 'flex',height:'15em' }}>
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${card.image})`, width: '50%' }}
              title="Image"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 text-xl mb-2" style={{ fontFamily: 'Poppins' }}>{card.quote}</div>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{card.author}, {card.resort}</p>
                  <p className="text-gray-600">{card.date}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
 





      </section> */}
    </div>
  );
}

export default Intro;
