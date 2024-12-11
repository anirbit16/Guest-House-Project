import React,{useEffect, useState} from 'react'
import {useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Rough = () => {
  
 

 
 
 
 
  return (
    <>
 
      
 
 <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
       
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white p-6 shadow-md rounded-md">
        {/* Column 1 */}
        
  
        <div className="bg-white p-6">
          {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 1</h2> */}
          <div className="bg-blue p-6" style={{backgroundColor:'red'}}></div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="name1">
                First Name
              </label>
              <input
                type="text"
                id="name1"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
               
                 
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              Contact Number
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
               
                 
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             ZIP
              </label>
              <input
                type="text"
                id="zip"
               className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
               
                
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              GST No
              </label>
              <input
                type="text"
                id="gst"
               className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
               
               
              />
            </div>
 
          </form>
        </div>

        {/* Column 2 */}
        <div className="bg-white p-6">
          {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 2</h2> */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="name2">
                Last Name
              </label>
              <input
                type="text"
                id="name2"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your name"
                 
              
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email2">
               Property Name
              </label>
              <input
                type="email"
                id="email2"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                 
            
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
               Property Contact
              </label>
              <input
                type="text"
                id="propcontact"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Owner Image
              </label>

            </div>

        

          </form>
        </div>

        {/* Column 3 */}
        <div className="bg-white p-6">
          {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 3</h2> */}
          
          <form className="space-y-4">
            
            <div>
          
              <label className="block text-gray-600 mb-1" htmlFor="name3">
                E-mail
              </label>
              <input
                type="text"
                id="name3"
                  className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your name"
  
               
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              Property Address
              </label>
              <input
                type="text"
                id="propaddress"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
             
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
               PAN
              </label>
              <input
                type="text"
                id="zip"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
             
             
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Property Image
              </label>
        
        
            </div>



 
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rough;
