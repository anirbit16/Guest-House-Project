 
import React from 'react'
import './LandingPage.css'
import SubFormimg from '../assets/SubFormimg.png'
import { useNavigate } from 'react-router-dom';
 

const SignUpForm=()=> {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/property-details')
  }
 
  return (
    <>
     <div className="signupform" style={{display:'block',fontFamily:'poppins'}}>
      <section className="heading">
        <div className="heading" style={{justifyContent:'center',display:'flex',fontSize:'30px',marginTop:'40px',color:'#8131ac',marginRight:'150px'}}>

        Well done on beginning to streamline your operations!
        </div>
      </section>
      <section className="content" style={{display:'flex'}}>
      <div className="left-part">
       
        <div className="image">
          <img src ={SubFormimg} alt="Img"/>
        </div>
      </div>    
       {/* Form Section */}
       <form className="rounded px-48 pt-6 pb-8 mb-4">
          <div className="text-center mt-4">
            <h1 className="text-violet-600">Let's work together</h1>
           </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-bold mb-2" htmlFor="fname">
                
              </label>
              <input
                type="text"
                id="fname"
                placeholder="First name"
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="lname">
                
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Last name"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="email">
                
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="phno">
               
              </label>
              <input
                type="text"
                id="phno"
                placeholder="Phone Number"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="passwd">
                
              </label>
              <input
                type="text"
                id="passwd"
                placeholder="Password"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="conf_passwd">
                
              </label>
              <input
                type="text"
                id="conf_passwd"
                placeholder="Confirm Password"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="next"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={()=>handleClick()}
            >
              Next
            </button>
          </div>
          <div className="text-center mt-4">
            <h6 className="text-gray-600">Already have an account?<span className="LogInButton" style={{color:'blue'}}>Log In</span></h6>
          </div>
        </form>
        </section>
        </div>
    </>
  )
}

export default SignUpForm;
