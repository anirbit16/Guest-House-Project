 
import React, { useState,useContext } from 'react'
import {Menu, MenuButton, MenuItem, MenuItems, Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import './LandingPage.css'
import SubFormimg from '../assets/SubFormimg.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {EyeOutlined,EyeInvisibleOutlined} from '@ant-design/icons';
import {jwtDecode} from "jwt-decode";
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SignUpForm=()=> {
// const [contactnumber,setContactNumber]=useState('');
// const [contactnumbererror,setContactNumberError]=useState('');
// const [lgpassword,setLgPassword] = useState('');
// const [passworderror,setPasswordError] = useState('');
 
 

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const [email,setEmail]=useState('');
  const [contactno,setContactNo]=useState('');
  const [password,setPassword]=useState('');
  const [strength, setStrength] = useState("");
  const [showPassword, setShowPassword] = useState('');
  const [confirmpassword,setConfirmPassword]=useState('');
  const [showConfirmpassword,setShowConfirmPassword]=useState('');
  const [errorfirstname,setErrorFirstName]=useState('');
  const [errorlastname,setErrorLastName]=useState('');
  const [errorpassword,setErrorPassword]=useState('');
  const [erroremail,setErrorEmail]=useState('');
  const [errorcnfpwd,setErrorCnfPwd]=useState('');
  const [errorcntct,setErrorCntct]=useState('');
  const [countrycode, setCountryCode] = React.useState('');
  const [country, setCountry] = useState('');



  
  
 
  
  const [open, setOpen] = useState(false)
  const [role,setRole] = useState(false)
  /*Regex Checkers*/
  const nameRegex =  /^[a-zA-Z0-9, ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const contactNumberRegex = /^\d{0,10}$/; 


  const navigate = useNavigate();
  
 const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };
 
 
  // First Name Upload
  const handlefnamechng=(e)=>{
  const value = e.target.value;
 


    
  if(value === ""){
    setFirstName('')
    setErrorFirstName('');
    return;
  }

  
  if (nameRegex.test(value)) {
     setFirstName(value);
     setErrorFirstName('');  
     return;
  } else {
    setErrorFirstName('');
    return;
  }
  }
  //Last Name Upload
  const handlelnamechng = (e) => {
    const value = e.target.value;
   
  
    const nameRegex = /^[a-zA-Z0-9, ]+$/;
  
    // Handle empty input explicitly and exit
    if (value === "") {
      setLastName("")
      setErrorLastName("");
      return; // Exit early to avoid further validation
    }
  
    // Check if the value matches the regex
    if (nameRegex.test(value)) {
       setLastName(value)
       setErrorLastName('');
    } else {
      setErrorLastName('');
    }
  };
  // Email Upload
  const handleemailchng=(e)=>{
    const value = e.target.value;
    setEmail(value);



 
  }


  const handleTabPressEmail = (e) => {
    const value=e.target.value;

    if (e.key === 'Tab' && !(emailRegex.test(value))) {
      setErrorEmail('Invalid E-mail Format');
    }else {
      setErrorEmail('')
    }


}
  const handlecntctchng = (e) => {
    const value = e.target.value;
  
  
    if (value === "") {
      setErrorCntct('');
    }
  
    if (contactNumberRegex.test(value)) {
      setContactNo(value);
      setErrorCntct('');
      return;
    } else {
      setErrorCntct('');
    }
  };
  
  const handleTabPress = (e) => {
    if (e.key === 'Tab' && contactno.length < 10) {
      setErrorCntct('At least 10 digits required.');
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value); // Update the state when the selection changes
  };
  
//  Upload Password
const handlepwdchng = (e) => {
  const value = e.target.value;
  setPassword(value);

  /*
  Updated Regex:
  Password must be exactly 8 characters long.
  */
 

  if (value === "") {
    setPassword("");
    setErrorPassword("");
    return;
  }

  if (passwordRegex.test(value)) {
    setPassword(value);
    setErrorPassword("");
  } else {
 
    setErrorPassword("Not valid password");
     
  }
};

  
  function evaluatePasswordStrength(password) {
    let score = 0;
    let label;
    let className;
 
    if (!password) return '';
 
    // Check password length
    if (password.length > 8) score += 1;
    // Contains lowercase
    if (/[a-z]/.test(password)) score += 1;
    // Contains uppercase
    if (/[A-Z]/.test(password)) score += 1;
    // Contains numbers
    if (/\d/.test(password)) score += 1;
    // Contains special characters
    if (/[^A-Za-z0-9]/.test(password)) score += 1;


    switch (score) {
      case 0:
      case 1:
      case 2:
            label="Weak";
            className="text-red-500";
            break;
    case 3:
            label = "Medium";
            className = "text-orange-500"; // Medium: Orange text
            break;

    case 4:
    case 5:
            label="Strong";
            className="text-green-500"
            break;
      default:
            label="";
            className="text-black"
  }
  return <span className={className}>{label}</span>;
}

 
  const shortcutfunc=()=>{
    navigate('/property-details', { state: {firstname,lastname,email,contactno} });
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
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop form's default behavior

    // Validation flag
    let isValid = true;
 

    // First name validation
    if (!firstname.trim()) {
        setErrorFirstName('First name is mandatory');
        isValid = false;
    } else {
        setErrorFirstName('');
    }

    // Last name validation
    if (!lastname.trim()) {
        setErrorLastName('Last name is mandatory');
        isValid = false;
    } else {
        setErrorLastName('');
    }

    // Email validation
    if (!email.trim()) {
        setErrorEmail('Email is mandatory');
        isValid = false;
    }  else if(!(emailRegex.test(email))){
        setErrorEmail('Invalid E-mail Format');
        isValid = false;

    }else{
      setErrorEmail('');
    }

    // Contact number validation
    if (!contactno.trim()) {
        setErrorCntct('Contact number is mandatory');
        isValid = false;
    } else if(contactno.length <10 ) {
        setErrorCntct('Atleast 10 digits required.');
        isValid = false;
    } else{
      setErrorCntct('');
    }

    // Password validation
    if (!password.trim()) {
        setErrorPassword('Password is mandatory');
        isValid = false;
    } else if (password.length < 8) {
        setErrorPassword('Atleast 8 Characters required');
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
            'http://192.168.1.16:8080/signups/insertDetails',
            formdata,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status === 200) {
            alert("Data submitted successfully!");
            navigate('/property-details', { state: {firstname,lastname,email,contactno} });
            setFirstName("");
            setLastName("");
            setEmail("");
            setContactNo("");
            setPassword("");
            setConfirmPassword("");
        }
    } catch (error) {
        console.log("Error submitting the form:",error);
        alert("Failed to submit the form. Please try again.");
    }
};


const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

const toggleConfirmPasswordVisibility = () => {
  setShowConfirmPassword((prevCnfPassword) => !prevCnfPassword);
};

const onTabPress = (e) =>{
  if(e.key === "Tab"){
    e.preventDefault()
  }
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
          <img src ={SubFormimg} alt="Img" style={{height:'400px',width:'600px'}}/>
        </div>
      </div>    
       {/* Form Section */}
       <form className="rounded px-48  mb-4">
          <div className="text-center mt-4">
            <h1 className="text-violet-600">Let's work together</h1>
           </div>
         <div className="rounded pt-6 pb-8 px-5 py-5 shadow-lg" >
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
                onKeyDown={handleTabPressEmail}
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
                onKeyDown={handleTabPress}
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
                  <Tooltip
      title={
        <ul style={{ margin: 0, padding: '0 1em', listStyleType: 'disc' }}>
           The password must contain: 
          <li>At most 8 characters.</li>
          <li>At least one uppercase letter.</li>
          <li>At least one lowercase letter.</li>
          <li>At least one digit.</li>
          <li>At least one special character.</li>
        </ul>
      }
    >
                          <input
                            type={showPassword ? "text" : "password"}
                            id="passwd"
                            placeholder="Enter your password"
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={password}
                            onChange={(event) => {
                            handlepwdchng(event);
                            setStrength(evaluatePasswordStrength(event.target.value));
                            }}
                          />

                  </Tooltip>
                  <button
                    type="button"
                    className="absolute right-3 top-8"
                    onClick={togglePasswordVisibility}
                    >
                  
                    {showPassword ?   <EyeOutlined />:<EyeInvisibleOutlined />}
                  </button>
                  <div className="text-red-500 text-sm mt-2" style={{ minHeight: '1.165rem' }}>
                  {errorpassword}
                  </div>
                            
                  <div>      
                  <small>{strength?`Password Strength: `:null}{strength}</small>
                </div>
                
                </div>

      {/* Confirm Password Field */}
      <div className="w-1/2 relative">
                  <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>
                   Confirm Password
                  </label>
                  <input
                    type={showConfirmpassword ? "text" : "password"}
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
                  
                    {showConfirmpassword ?   <EyeOutlined />:<EyeInvisibleOutlined />}
                  </button>
                  <div className="text-red-500 text-sm mt-2" style={{ minHeight: '1.165rem' }}>
                    {errorcnfpwd}
                  </div>
                
                </div>
    </div>

          
          <div className="flex items-center justify-between">

 

       
            <button
              type="next"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Next
            </button>
 

            <button style={{marginLeft:'40px',color:'#fff'}} onClick={shortcutfunc}>SC</button>
            </div>
          </div>
          <div className="text-center mt-4">
            <h6 className="text-gray-600">Already have an account?<span className="Login" 
                                                                  style={{color:'blue'}} onClick={()=>handleLoginClick('admin')} 
                                                                  onMouseOver={(e) => e.target.style.cursor = 'pointer'}>Login as an admin</span></h6>
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


