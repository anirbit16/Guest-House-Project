import React, { useState } from 'react';
import  vucs_logo from '../assets/vucs_logo.png'
import {Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const [role,setRole] = useState(false)
 


  const handleLoginClick=(selectedrole)=>{
    setOpen(true)
    setRole(selectedrole)

  }
 const navigate = useNavigate();
  const handleSignUpClick=()=>{
    navigate('/sign-up')
    console.log("ABCD")
  }

  return (
    <>
    <section className="navbar">
    <nav className="p-4" style={{backgroundColor:'#006699',fontFamily:'Poppins'}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className='logo'>
          <a href='/intro-page'>
          <img src={vucs_logo} style={{width:'50px'}} />
          </a>
        </div>
        {/* Left Links - Centered */}
        <div className="flex-1 flex justify-center hidden md:flex space-x-10">
          <a href="/about-us" className="text-white text-lg hover:text-gray-300">
            About Us
          </a>
          <a href="/contact-us" className="text-white text-lg hover:text-gray-300">
            Contact Us
          </a>

          <a href="/our-plans" className="text-white text-lg hover:text-gray-300">
            Our Plans
          </a>
          <a href="#" className="text-white text-lg hover:text-gray-300">
            Support
          </a>
        </div>

        {/* Right Links - Aligned to the end */}
        <div className="hidden md:flex space-x-14">
        <button class="bg-#006699-500" style={{backgroundColor:'#00699',color:'#fff',border:'0.5px solid yellow',padding:'10px',borderRadius:'5px'}} onClick={()=>handleSignUpClick()}>Subscribe Now</button>
           
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="text-white text-lg hover:text-gray-300" style={{backgroundColor:'#006699',padding:'10px'}} >
         Login
           
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="login-dropdown block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              onClick={()=>handleClick('User')} 
            >
              User
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              onClick={()=>handleClick('Admin')}    style={{color:'black'}}        
            >
              Admin
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              onClick={()=>handleClick('Sys-Admin')}
            >
              Sys-admin
            </a>
          </MenuItem>
        
        </div>
      </MenuItems>
    </Menu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (visible when open) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block text-white py-2 px-4 hover:bg-blue-600">
          Home
        </a>
        <a href="#" className="block text-white py-2 px-4 hover:bg-blue-600">
          About Us
        </a>
        <a href="#" className="block text-white py-2 px-4 hover:bg-blue-600">
          Services
        </a>
        <a href="#" className="block text-white py-2 px-4 hover:bg-blue-600">
          Contact
        </a>
      </div>
    </nav>
    </section>
    <section className="modals">
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    <DialogPanel
      transition
      className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
    >
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Log In as {role} </h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="contact-number" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact-number"
              name="contact-number"
              placeholder="Enter your contact number"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 mr-2"
              onClick={() => console.log("Cancel")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </DialogPanel>
  </div>
</div>

      
    </Dialog>
    </section>


 
    </>

    
    


    
  );
};

export default Navbar;