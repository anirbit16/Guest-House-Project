import React from 'react';
import Intro_1 from '../assets/Intro_1.jpg';
import Intro_2 from '../assets/Intro_2.png';
import Intro_3 from '../assets/Intro_3.png';
import Intro_4 from '../assets/Intro_4.png';
import Intro_5 from '../assets/Intro_5.jpg';
import { FieldTimeOutlined,ImportOutlined,FundProjectionScreenOutlined,SettingOutlined,
  CloudSyncOutlined,FileProtectOutlined,CustomerServiceOutlined,ApiOutlined,StockOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from 'swiper/react';

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
           
            <img src={Intro_4} alt='' />
          </div>
          <div className='right row' style={{display:'block'}}>
            <div className="heading" style={{fontSize:'1.5rem',fontWeight:'500'}}>Comprehensive Property Management Software</div>
            <div className="text" syle={{marginBottom:'10px'}}>Reservations,cancellations,check-in or out,or adding a new room,manage everything at one place. </div>
   
            
          </div>
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
      <section className="customer-reviews" style={{marginTop:'100px',marginBottom:'100px'}}>

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
 





      </section>
    </div>
  );
}

export default Intro;
