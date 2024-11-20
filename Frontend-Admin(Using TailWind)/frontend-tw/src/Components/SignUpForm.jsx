 
import React, { useState } from 'react'
import './LandingPage.css'
import SubFormimg from '../assets/SubFormimg.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons';

const SignUpForm=()=> {

  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [contactno,setContactNo]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmpassword,setConfirmPassword]=useState('');
  const [errorfirstname,setErrorFirstName]=useState('');
  const [errorlastname,setErrorLastName]=useState('');
  const [errorpassword,setErrorPassword]=useState('');
  const [erroremail,setErrorEmail]=useState('');
  const [errorphno,setErrorPhNo]=useState('');
  const [errorcnfpwd,setErrorCnfPwd]=useState('');


  const navigate = useNavigate();
  
  const contactNumberRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;
 
  
  const shortcutfunc=()=>{
    navigate('/property-details')
  }
 
  const handleClick = async (e) => {
    e.preventDefault();
  
    let isValid = true; // Flag to track validity
  
    if (!firstname) {
      setErrorFirstName('First name is mandatory');
      isValid = false;
    } else if (!nameRegex.test(firstname)) {
      setErrorFirstName('Name must contain only letters');
      isValid = false;
    } else {
      setErrorFirstName('');
    }
  
    if (!lastname) {
      setErrorLastName('Last name is mandatory');
      isValid = false;
    } else if (!nameRegex.test(lastname)) {
      setErrorLastName('Name must contain only letters');
      isValid = false;
    } else {
      setErrorLastName('');
    }
  
    if (!email) {
      setErrorEmail('Email is mandatory');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setErrorEmail('Please enter your email ID properly');
      isValid = false;
    } else {
      setErrorEmail('');
    }
  
    if (!contactno) {
      setErrorPhNo('Contact number is mandatory');
      isValid = false;
    } else if (!contactNumberRegex.test(contactno)) {
      setErrorPhNo('Contact number must be a 10-digit number');
      isValid = false;
    } else {
      setErrorPhNo('');
    }
  
    if (!password) {
      setErrorPassword('Password is mandatory');
      isValid = false;
    } else {
      setErrorPassword('');
    }
  
    if (!confirmpassword) {
      setErrorCnfPwd('Confirm Your Password');
      isValid = false;
    } else if (password !== confirmpassword) {
      setErrorCnfPwd('Passwords don’t match');
      isValid = false;
    } else {
      setErrorCnfPwd('');
    }
  
    if (isValid) {
      try {
        const formdata = new FormData();
        formdata.append("firstname", firstname);
        formdata.append("lastname", lastname);
        formdata.append("email", email);
        formdata.append("contactno", contactno);
        formdata.append("password", password);
    
        const response = await axios.post('http://192.168.1.8:8080/signups/insertDetails', formdata, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status === 200) {
          alert("Data submitted successfully!");
          navigate("/property-details");
          setFirstName("");
          setLastName("");
          setEmail("");
          setContactNo("");
          setPassword("");
          setConfirmPassword("");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("Failed to submit the form. Please try again.");
      }
  }
}


const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

const toggleConfirmPasswordVisibility = () => {
  setConfirmPassword((prevCnfPassword) => !prevCnfPassword);
};
 
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
                onChange={(e) => setFirstName(e.target.value)}
              />
                 {errorfirstname && <div className="text-red-500 text-sm mt-2">{errorfirstname}</div>}
            </div>

            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="lname">
                
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Last name"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setLastName(e.target.value)}
              />
               {errorlastname && <div className="text-red-500 text-sm mt-2">{errorlastname}</div>}
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
                onChange={(e) => setEmail(e.target.value)}
              />
               {erroremail && <div className="text-red-500 text-sm mt-2">{erroremail}</div>}
               
            </div>
            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="phno">
               
              </label>
              <input
                type="text"
                id="phno"
                placeholder="Phone Number"
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setContactNo(e.target.value)}
              />
               {errorphno && <div className="text-red-500 text-sm mt-2">{errorphno}</div>}
            </div>
   
          </div>
          <div className="flex gap-4 mb-4">
  {/* Password Field */}
  <div className="w-1/2 relative">
    <label className="block text-sm font-bold mb-2" htmlFor="passwd">
      
    </label>
    <input
      type={showPassword ? "text" : "password"}
      id="passwd"
      placeholder="Password"
      className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(e) => setPassword(e.target.value)}
    />
    <span
      onClick={togglePasswordVisibility}
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
    </span>
    {errorpassword && <div className="text-red-500 text-sm mt-2">{errorpassword}</div>}
  </div>

      {/* Confirm Password Field */}
      <div className="w-1/2 relative">
        <label className="block text-sm font-bold mb-2" htmlFor="conf_passwd">
          
        </label>
        <input
          type={confirmpassword ? "text" : "password"}
          id="conf_passwd"
          placeholder="Confirm Password"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span
          onClick={toggleConfirmPasswordVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          {confirmpassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </span>
        {errorcnfpwd && <div className="text-red-500 text-sm mt-2">{errorcnfpwd}</div>}
      </div>
    </div>

          
          <div className="flex items-center justify-between">
            <button
              type="next"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleClick}
            >
              Next
            </button>

            <button style={{marginLeft:'40px'}} onClick={shortcutfunc}>SC</button>
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
