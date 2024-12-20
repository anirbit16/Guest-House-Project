 
import React, {createContext, useState } from 'react'
import {Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import './LandingPage.css'
import SubFormimg from '../assets/SubFormimg.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons';
import {jwtDecode} from "jwt-decode";


const SignUpForm=({})=> {
// const [contactnumber,setContactNumber]=useState('');
// const [contactnumbererror,setContactNumberError]=useState('');
// const [lgpassword,setLgPassword] = useState('');
// const [passworderror,setPasswordError] = useState('');
  const SharedContext = createContext();
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [contactno,setContactNo]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword, setShowPassword] = useState('');
  const [confirmpassword,setConfirmPassword]=useState('');
  const [errorfirstname,setErrorFirstName]=useState('');
  const [errorlastname,setErrorLastName]=useState('');
  const [errorpassword,setErrorPassword]=useState('');
  const [erroremail,setErrorEmail]=useState('');
  const [errorcnfpwd,setErrorCnfPwd]=useState('');
  const [errorcntct,setErrorCntct]=useState('')
 
  
  const [open, setOpen] = useState(false)
  const [role,setRole] = useState(false)
 


  const navigate = useNavigate();
  
  const contactNumberRegex = /^\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
  // First Name Upload
  const handlefnamechng=(e)=>{
  const value = e.target.value;
  setFirstName(value);
  const nameRegex =  /^[a-zA-Z0-9, ]+$/;   

    
  if(value === ""){
    setErrorFirstName('');
    return;
  }

  
  if (!nameRegex.test(value)) {
     setErrorFirstName('Invalid Name Format');  
     return;
  } else {
    setErrorFirstName('');
  }
  }
  //Last Name Upload
  const handlelnamechng = (e) => {
    const value = e.target.value;
    setLastName(value);
  
    const nameRegex = /^[a-zA-Z0-9, ]+$/;
  
    // Handle empty input explicitly and exit
    if (value === "") {
      setErrorLastName("");
      return; // Exit early to avoid further validation
    }
  
    // Check if the value matches the regex
    if (!nameRegex.test(value)) {
      setErrorLastName("Invalid Name Format");
    } else {
      setErrorLastName("");
    }
  };
  // Email Upload
  const handleemailchng=(e)=>{
  const value = e.target.value;
  setEmail(value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    
  if(value === ""){
    setErrorEmail('');
    return;
  }
      if (!emailRegex.test(value)) {
        
        setErrorEmail('Invalid E-mail Format');  
        return;
    } else {
      setErrorEmail('');
    }
  }
  const handlecntctchng=(e)=>{
    const value = e.target.value;
        
    setContactNo(value);
    const contactNumberRegex = /^\d{0,10}$/;
    if(value === ""){
      setErrorCntct('');
    }

    if (!contactNumberRegex.test(value)) {
      setErrorCntct('Invalid Contact Number');
      return;
   } else {
    setErrorCntct('');
   }
  }
//  Upload Password
  const handlepwdchng=(e)=>{
    const value = e.target.value;
        
    setPassword(value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(value === ""){
      setErrorPassword('');
      return;
    }

    if (!passwordRegex.test(value)) {
      setErrorPassword('Invalid Password');
      return;
   } else {
    setErrorPassword('');
   }
  }
  
  

 
  const shortcutfunc=()=>{
    navigate('/property-details')
  }

  const handleLoginClick=async(selectedrole)=>{
    setOpen(true)
    setRole(selectedrole)
 
   
     
  }
 

  // Admin Login handling function
  const handleAdminLogin = async (e) => {  // Add 'async' keyword here
    e.preventDefault();
    console.log("mobile",contactno);
    console.log("password", password);
    console.log("role", role);
   
    const loginformdata = new FormData();
    loginformdata.append("mobile",contactno);
    loginformdata.append("password", password);
    loginformdata.append("role", role);
   
  
    if (!contactno) {
      setErrorCntct("Please enter your contact number");
      return;
    } else if (!password) {
      setErrorPassword("Please enter your password");
      return; // Add return statement here to exit function
    } else {
      try {
        const response = await axios.post('http://192.168.1.6:3000/api/user/login', loginformdata, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const decoded = jwtDecode(response.data.token)
      
       

        
        
        
        localStorage.setItem('role', role);
        localStorage.setItem('user', decoded.name);
        alert(`Successfully logged in as ${role}`);
        
        // Redirect after storing data
        setTimeout(() => {
          const rolePathMap = {
            user: `http://192.168.1.6:5173/userhome?role=${role}&user=${encodeURIComponent(decoded.name)}`,
            admin: `http://192.168.1.6:5173/admindashboard?role=${role}&user=${encodeURIComponent(decoded.name)}`,
            'sys-admin': '/sysadminpage'
          };
          const redirectPath = rolePathMap[decoded.role] || '/';
          window.location.href = redirectPath;
        }, 500); // Delay to ensure storage completes
        
        
        alert(`Successfully logged in as ',${role}`);

      } catch (error) {
        // Handle error response
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      }
    }
  };
  // Sign In Form
  const handleClick = async (e) => {
    e.preventDefault(); // Stop form's default behavior

    // Validation flag
    let isValid = true;

    // First name validation
    if (!firstname.trim()) {
        setErrorFirstName('First name is mandatory');
        isValid = false;
    } else if (!/^[a-zA-Z0-9, ]+$/.test(firstname)) {
        setErrorFirstName('Invalid First Name Format');
        isValid = false;
    } else {
        setErrorFirstName('');
    }

    // Last name validation
    if (!lastname.trim()) {
        setErrorLastName('Last name is mandatory');
        isValid = false;
    } else if (!/^[a-zA-Z0-9, ]+$/.test(lastname)) {
        setErrorLastName('Invalid Last Name Format');
        isValid = false;
    } else {
        setErrorLastName('');
    }

    // Email validation
    if (!email.trim()) {
        setErrorEmail('Email is mandatory');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorEmail('Invalid Email');
        isValid = false;
    } else {
        setErrorEmail('');
    }

    // Contact number validation
    if (!contactno.trim()) {
        setErrorCntct('Contact number is mandatory');
        isValid = false;
    } else {
        setErrorCntct('');
    }

    // Password validation
    if (!password.trim()) {
        setErrorPassword('Password is mandatory');
        isValid = false;
    } else if (password.length < 8) {
        setErrorPassword('Password must be at least 8 characters long');
        isValid = false;
    } else {
        setErrorPassword('');
    }

    // Confirm password validation
    if (!confirmpassword.trim()) {
        setErrorCnfPwd('Confirm Your Password');
        isValid = false;
    } else if (password !== confirmpassword) {
        setErrorCnfPwd('Passwords don’t match');
        isValid = false;
    } else {
        setErrorCnfPwd('');
    }

    // If the form is not valid, prevent API submission
    if (!isValid) {
        return;
    }

    // Proceed with API call if the form is valid
    try {
        const formdata = new FormData();
        formdata.append("firstname", firstname);
        formdata.append("lastname", lastname);
        formdata.append("email", email);
        formdata.append("contactno", contactno);
        formdata.append("password", password);
        formdata.append("role", role);

        const response = await axios.post(
            'http://192.168.1.8:8080/signups/insertDetails',
            formdata,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            alert("Data submitted successfully!");
            setFirstName("");
            setLastName("");
            setEmail("");
            setContactNo("");
            setPassword("");
            setConfirmPassword("");
        }
    } catch (error) {
        console.error("Error submitting the form:", error.response?.data?.error || error.message);
        alert("Failed to submit the form. Please try again.");
    }
};


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
              <label className="block text-sm font-bold mb-2" htmlFor="fname"  style={{color:'grey',fontWeight:'500'}}>
                First Name
              
              </label>
              <input
                type="text"
                id="fname"
                placeholder="Enter your first name"
                className="appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                value={firstname}
                onChange={handlefnamechng}
              />
                 {errorfirstname && <div className="text-red-500 text-sm mt-2">{errorfirstname}</div>}
            </div>

            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="lname"  style={{color:'grey',fontWeight:'500'}}>
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Enter your last name"
                value={lastname}
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                onChange={handlelnamechng}
              />
               {errorlastname && <div className="text-red-500 text-sm mt-2">{errorlastname}</div>}
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="email"  style={{color:'grey',fontWeight:'500'}}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your e-mail"
                value={email}
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleemailchng}
              />
               {erroremail && <div className="text-red-500 text-sm mt-2">{erroremail}</div>}
               
            </div>
            <div className="w-1/2">
              <label className="block  text-sm font-bold mb-2" htmlFor="phno"  style={{color:'grey',fontWeight:'500'}}>
               Contact Number
              </label>
              <input
                type="text"
                id="phno"
                placeholder="Enter your contact number"
                value={contactno}
                className=" appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                onChange={handlecntctchng}
              />
               {errorcntct && <div className="text-red-500 text-sm mt-2">{errorcntct}</div>}
            </div>
   
          </div>
          <div className="flex gap-4 mb-4">
                {/* Password Field */}
                <div className="w-1/2 relative">
                  <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>
                    Password
                  </label>
                  <input
                   
                    type={showPassword ? "text" : "password"}
                    id="passwd"
                    placeholder="Enter your password "
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={password}
                    onChange={handlepwdchng}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-8"
                    onClick={togglePasswordVisibility}
                    >
                  
                    {showPassword ?   <EyeOutlined />:<EyeInvisibleOutlined />}
                  </button>
                  <div className="text-red-500 text-sm mt-2" style={{ minHeight: '1.75rem' }}>
                  {errorpassword}
                </div>
                
                </div>

      {/* Confirm Password Field */}
      <div className="w-1/2 relative">
                  <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>
                   Confirm Password
                  </label>
                  <input
                    type={confirmpassword ? "text" : "password"}
                    id="conf_passwd"
                    value={confirmpassword}
                    placeholder="Confirm your password"
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-8"
                    
                    onClick={toggleConfirmPasswordVisibility}
                   
                    >
                  
                    {confirmpassword ?   <EyeOutlined />:<EyeInvisibleOutlined />}
                  </button>
                  <div className="text-red-500 text-sm mt-2" style={{ minHeight: '1.75rem' }}>
                    {errorcnfpwd}
                  </div>
                
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

            <button style={{marginLeft:'40px',color:'#fff'}} onClick={shortcutfunc}>SC</button>
          </div>
          <div className="text-center mt-4">
            <h6 className="text-gray-600">Already have an account?<span className="Login" 
                                                                  style={{color:'blue'}} onClick={()=>handleLoginClick('admin')} 
                                                                  onMouseOver={(e) => e.target.style.cursor = 'pointer'}>Login</span></h6>
          </div>
        </form>
        </section>

{/* Login Modal */}
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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Log in as admin </h3>
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
              value={contactno}
              onChange={(e) => setContactNo(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pt-4 flex justify-end">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 mr-2"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              onClick={handleAdminLogin}
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

 
        </div>
    </>
  )
}

export default SignUpForm;
