import React from 'react';
import { Carousel } from "@material-tailwind/react";

const ContactUs = () => {
  return (
    <>
      <section className="hero">
        <Carousel className="rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </section>

      <section className="addressandform py-8">
        <h2 className="text-3xl font-semibold text-center font-poppins mb-8">Contact Us</h2>

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-8">
            <div className="w-full lg:w-5/12 text-lg text-start font-poppins mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <i className="bi bi-geo-alt text-xl mr-3"></i>
                <p>Street No. 1111 (Major Arterial Road Mouza – Noapara), J.L, Plot No. IID/31/1, NH12, Newtown, Kolkata, West Bengal 700156</p>
              </div>
              <div className="flex items-center mb-4">
                <i className="bi bi-telephone text-xl mr-3"></i>
                <p>+91 9163227342</p>
              </div>
              <div className="flex items-center">
                <i className="bi bi-envelope text-xl mr-3"></i>
                <p>connect@vucspvtltd.com</p>
              </div>
            </div>

            <div className="w-full lg:w-7/12 flex justify-center items-center">
              <form className="w-full">
                <div className="flex flex-wrap mb-4">
                  <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
                    <input
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-2">
                    <input
                      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <input
                  className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:border-blue-500"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                  required
                />
                <textarea
                  className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4 focus:outline-none focus:border-blue-500"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
