import React from 'react'
import './Landingpage.css'
import { Carousel,Typography,Button} from "@material-tailwind/react";
import Pricingimage_1 from '../assets/Pricingimage_1.png'
import Pricingimage_2 from '../assets/Pricingimage_2.png'
import Pricingimage_3 from '../assets/Pricingimage_3.png'
import ourplans_new from '../assets/ourplans_new.png'

const OurPlans = () => {


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

const plans = [
        { title: "Silver", price: 500, feature: featureBox1, btnTitle: "Sign up", btnClass: "btn-outline-primary" },
        { title: "Gold", price: 1000, feature: featureBox2, btnTitle: "Sign Up", btnClass: "btn-primary" },
        { title: "Business", price: 1500, feature: featureBox3, btnTitle: "Sign Up", btnClass: "btn-primary" }
      ];
  return (

    <>
    {/* Hero Section-Carousel */}
   
    <section className="hero">
    {/* <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
            style={{height:'612px',width:'1868px'}}
        /> */}

<Carousel className="rounded-xl" autoplay="true" loop="">
     <img
        src={ourplans_new}
        className="h-full w-full object-cover"
       
      />
      {/* <img
        src={AboutUs_2}
        alt="image 2"
        className="h-{full} w-{full} object-cover"
      />
      <img
        src={AboutUs_3}
        alt="image 3"
        className="h-{full} w-{full}object-cover"
      /> */}
    </Carousel>
    </section>

      {/* Pricing Page Section */}
<section className="pricing-cards py-8">
  <div className="cards" style={{fontFamily:'poppins',display:'flex',justifyContent:'center',gap:'10px'}}>
    {plans.map((plan, index) => (
      <div
        key={index}
        className="max-w-sm w-full lg:w-1/4 p-4 mb-6 shadow-lg rounded-lg text-center"
      >
        <div
          className={`py-4 text-white rounded-t-lg ${
            plan.title === 'Silver'
              ? 'bg-gray-400'
              : plan.title === 'Gold'
              ? 'bg-yellow-500'
              : plan.title === 'Business'
              ? 'bg-blue-800'
              : 'bg-gray-200'
          }`}
        >
          <h4 className="text-lg font-semibold">{plan.title}</h4>
        </div>
        <div className="bg-white p-6 rounded-b-lg">
          <h1 className="text-3xl font-bold">
            ₹{plan.price}{' '}
            <span className="text-gray-500 text-lg font-normal">/ mo</span>
          </h1>
          <ul className="list-none mt-6 mb-6 space-y-2">
            {plan.feature.map((data, idx) => (
              <li key={idx} className="text-gray-700">
                {data}
              </li>
            ))}
          </ul>
          {/* <button
            type="button"
            className="btn-primary w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
            onClick={() => {
              setShowSignUpModal();
              handleSignUpClick(plan.title);
            }}
          >
            {plan.btnTitle}
          </button> */}
        </div>
      </div>
    ))}
  </div>
</section>

 
    </>
  )
}

export default OurPlans
