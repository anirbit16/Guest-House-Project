
import {useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Dummy_6 from '../assets/Dummy_6.jpg'
import axios from 'axios'
import SignUpPage_img from '../assets/SignUpPage_img.png'
 


import './Landingpage.css'

const PropertyDetailsOne = () => {

const location = useLocation();
const navigate = useNavigate();
 
const receivedemail = useState(location.state.email)
const [firstname, setFirstName] = useState(location.state.firstname);
const [lastname,  setLastName] = useState(location.state.lastname);
const [receivedcontactno,setContactNo]= useState(location.state.contactno);
console.log("Received Email: ",receivedemail)
console.log("Received Contact No: ",receivedcontactno)
const sentemail = receivedemail[0];
const sentcontactno = receivedcontactno;
console.log("Sent Email: ",sentemail)
console.log("Sent Contact No: ",sentcontactno)

  // Form Values

                                 
  /*States*/

 
 
const [propertyname,setPropertyName]=useState('')
const [propertynameerror,setPropertyNameError]=useState('')

const [propertyaddress,setPropertyAddress]=useState('')
const [propertyaddresserror,setPropertyAddressError]=useState('')
const [propertycontactno,setPropertyContactNo]=useState('')
const [propertycontactnoerror,setPropertyContactNoError]=useState('')

const [zip,setZip]=useState('');
const [ziperror,setZiperror]=useState('');
const [tanerror,setTANError]=useState('');

 
const [roomserror,setRoomsError]=useState('');
 
const [taxes,setTaxes]=useState(40);

const [ownername,setOwnerName]=useState('');
const [ownercontact,setOwnerContact]=useState('');
const [ownernameerror,setOwnerNameError]=useState('');

const [ownercontacterror,setOwnerContactError]=useState('');
const [gst,setGst]=useState('');
const [gsterror,setGstError]=useState('');
const [pan,setPan]=useState('');
const [panerror,setPanError]=useState('');
 
 
const [ownerimage,setOwnerImage]=useState('');
const [propertyimage,setPropertyImage]=useState('');
const [propertyimageerror,setPropertyImageError]=useState('');
const [ownerimageerror,setOwnerImageError]=useState('');

const [checkin,setCheckIn]=useState('12:30:00');
const [checkout,setCheckOut]=useState('11:30:00');

const [tan, setTAN] = useState('');

const [checkinerror,setCheckInError]=useState('');
const [checkouterror,setCheckOutError]=useState('');
const [ownerimagepreview, setOwnerImagePreview] = useState('');
const [propertyimagepreview, setPropertyImagePreview] = useState('');
const [rooms, setRooms] = useState('');
const [subplan, setSubPlan] = useState('');
const [duration, setDuration] = useState("6 Months");
const [summary, setSummary] = useState({ basePrice: 0, taxes: 0, discount: 0, total: 0 });

/*Regex Checkers*/
const contactNumberRegex = /^\d{10}$/;  
const propertynameregex = /^[a-zA-Z0-9, ]+$/;
 
const propertyaddressregex = /^[a-zA-Z0-9\s,.'/-]{3,}$/;
 
const nameRegex =  /^[a-zA-Z0-9, ]+$/; 
const panRegex =  /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}$/;
const zipRegex =/^[0-9]*$/;

const tanRegex =/^[A-Z]{4}\d{5}[A-Z]$/;



 
 

// Change handlers for form


 
const handleLoginClick=async(selectedrole)=>{
  setOpen(true)
  setRole(selectedrole)
 
   
}

 































 
 

 /*Image upload handling functions*/

 /*File input definations */
const ownerFileInputRef = useRef(null);
const propertyFileInputRef = useRef(null);

const handleOwnerImgChange = (e) => {
  const file = e.target.files[0];
  setOwnerImage(file);
        
        const reader = new FileReader();
        reader.onloadend = () => {
          setOwnerImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
};
/*Property Image Change function */
const handlePropertyImgChange = (e) => {
  const file = e.target.files[0];
  setPropertyImage(file);
        
        const reader = new FileReader();
        reader.onloadend = () => {
            setPropertyImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
};
/*Owner Image Click */
const handleOwnerH1Click = () => {
  ownerFileInputRef.current.click();
};
/*Property Image Click */
const handlePropertyH1Click = () => {
  propertyFileInputRef.current.click();
};

const handleShortcut=()=>{
  navigate('/profile-details', { state: { 
    propertyname, propertyaddress, 
    propertycontactno, zip, rooms, 
    subplan, taxes, ownername, 
    ownercontact,  gst, pan,
    ownerimage, propertyimage, duration,
    checkin,checkout,
  } })
}
/*Checker function*/
 
 
/*Handle Submit Function*/
const handleSubmit = async (e) => {
  e.preventDefault();

  let isValid = true; // Flag to track overall form validity

  // Property Name Error Check
  if (!propertyname) {
    setPropertyNameError('Property Name Required');
    isValid = false;
  } else {
    setPropertyNameError('');
  }

  // Property Address Error Check
  if (!propertyaddress) {
    setPropertyAddressError('Property Address Required');
    isValid = false;
  }  else {
    setPropertyAddressError('');
  }

  // Property Contact Number Check
  if (!propertycontactno) {
    setPropertyContactNoError('Property Contact Number Required');
    isValid = false;
  } else if(propertycontactno.length < 10){
    setPropertyContactNoError('Contact Number Should Be of 10 digits');
    isValid = false;
  } else{
    setPropertyContactNoError('');
  }

  // Owner Name Error Check
  if (!ownername) {
    setOwnerNameError('Owner Name Required');
    isValid = false;
  } else {
    setOwnerNameError('');
  }

  // Owner Contact Number Check
  if (!ownercontact) {
    setOwnerContactError('Owner Contact Number Required');
    isValid = false;
   } else {
    setOwnerContactError('');
  }

  // PAN Error Check
  if (!pan) {
      setPanError('PAN Number Required');
      isValid = false;
  } else if(pan.length < 10){
      setPanError('PAN Number should of 10 characters.')
      isValid = false;
  }
    else {
    setPanError('');
  }

  // Property Image Error Check
  if (!propertyimage) {
    setPropertyImageError("Property Image is required");
    isValid = false;
  } else {
    setPropertyImageError('');
  }

  // Owner Image Error Check
  if (!ownerimage) {
    setOwnerImageError("Owner Image is required");
    isValid = false;
  } else {
    setOwnerImageError('');
  }

  // ZIP Error Check
  if (!zip) {
    setZiperror("ZIP Code is required");
    isValid = false;
  } if(zip.length < 6){
    setZiperror("ZIP Code should be of 6 digits.");
    isValid = false;

  } else {
    setZiperror('');
  }

  // GST Error Check
  if (!gst) {
    setGstError('GST ID is required');
    isValid = false;
  }   else {
    setGstError('');
  }

  // Rooms Error Check
  if (!rooms) {
    setRoomsError('Rooms cannot be empty');
    isValid = false;
  } else {
    setRoomsError('');
  }

  // Check-In Time Error Check
  if (!checkin) {
    setCheckInError('Check-In Time is required');
    isValid = false;
  } else {
    setCheckInError('');
  }

  // Check-Out Time Error Check
  if (!checkout) {
    setCheckOutError('Check-Out Time is required!');
    isValid = false;
  } else {
    setCheckOutError('');
  }

  if(!tan){
    setTANError('TAN Number is required.')
    isValid = false;
  } else {
    setTANError('');
  }

  // If any validation fails, stop execution
  if (!isValid) {
    return;
  }else{
    try{
      
      const formdata = new FormData()
      setTaxes(40)
      console.log('propertyname',propertyname)
      console.log('propertyaddress',propertyaddress)
      console.log('properycontactno',propertycontactno)
      console.log('zip',zip)
      console.log('rooms',rooms)
      console.log('subplan',subplan)
      console.log('taxes',taxes)
      console.log('ownername',ownername)
      console.log('ownercontact',ownercontact)
      console.log('gst',gst)
      console.log('pan',pan)
      console.log('ownerimage',ownerimage)
      console.log('propertyimage',propertyimage)
      console.log('duration',duration)
      /************************ */
      formdata.append('propertyname',propertyname)
      formdata.append('propertyaddress',propertyaddress)
      formdata.append('propertycontactno',propertycontactno)
      formdata.append('zip',zip)
      formdata.append('rooms',rooms)
      formdata.append('subplan',subplan)
      formdata.append('taxes',taxes)
      formdata.append('ownername',ownername)
      formdata.append('ownercontact',ownercontact)
      formdata.append('gst',gst)
      formdata.append('pan',pan)
      formdata.append('ownerimage',ownerimage)
      formdata.append('propertyimage',propertyimage)
      formdata.append('duration',duration)
      formdata.append('checkin',checkin)
      formdata.append('checkout',checkout)
      formdata.append('tan',tan)
       
 
      const response = await axios.post('http://127.0.0.1:8080/props/registerProperty', formdata, {
          'Content-Type': 'multipart/form-data'
      });
      if(response.status === 200 ){
        alert('Upload Successful')
       
        navigate('/profile-details', { state: { 
                                               pan,sentemail,sentcontactno
                                            } })
      }



      

      

    }catch(error){
      console.log(error)
      alert(error)
    }
  }

  
};

 
/*Plans Array*/
const plans = {
  Silver: {
    "6 Months": { basePrice: 260, taxes: 40, discount:null },
    "12 Months": { basePrice: 460, taxes: 10, discount: 12 },
  },
  Gold: {
    "6 Months": { basePrice: 760, taxes: 40, discount: null },
    "12 Months": { basePrice: 1160, taxes: 10, discount: 12 },
  },
  Platinum: {
    "6 Months": { basePrice: 1460, taxes: 40, discount: null },
    "12 Months": { basePrice: 2060, taxes: 10, discount: 12 },
  },
};



/*Plan and room handling function*/
/*Update plan and summary*/
const updatePlanAndSummary = (rooms) => {
  let selectedPlan = '';
  if (rooms >= 1 && rooms <= 10) selectedPlan = "Silver";
  else if (rooms >= 11 && rooms <= 20) selectedPlan = "Gold";
  else if (rooms > 20) selectedPlan = "Platinum";

  const planDetails = plans[selectedPlan]?.[duration] || { basePrice: 0, taxes: 0, discount: 0 };
  setSubPlan(selectedPlan);
  setSummary({
    ...planDetails,
    total: planDetails.basePrice + planDetails.taxes - planDetails.discount,
  });
};
/*Handle Room Form Upload*/
const handleRoomChange = (e) => {
  const value = parseInt(e.target.value, 10) || 0;
  setRooms(value);
  if (value >= 1) {
    updatePlanAndSummary(value);
  } else {
    setSubPlan('');
    setSummary({ basePrice: 0, taxes: 0, discount: 0, total: 0 });
  }
};

/*Handle Duration Form Upload*/
const handleDurationChange = (e) => {
  const selectedDuration = e.target.value;
  setDuration(selectedDuration);
  if (subplan) {
    const planDetails = plans[subplan]?.[selectedDuration] || { basePrice: 0, taxes: 0, discount: 0 };
    setSummary({
      ...planDetails,
      total: planDetails.basePrice + planDetails.taxes - planDetails.discount,
    });
  }
};

// Property Name Upload 
const handlePropertyNameChange = (e) => {
  const value = e.target.value;
  setPropertyName(value);
};

 

// Property Address Upload 
const handlePropertyAddressChange = (e) => {
  const value = e.target.value;
  const propertyaddressregex =/^[a-zA-Z0-9\s,.'#-/]+$/;
  if(value === ''){
     setPropertyAddress('');
     setPropertyAddressError('');
     return;
  }
  
  if (propertyaddressregex.test(value)) {
        setPropertyAddress(value);
        setPropertyAddressError(''); // Clear error if input is valid
        return;
  } else {
    setPropertyAddressError('Invalid property address');
    return;
  }
}
//  Contact Number Form Upload


const handlePropertyContactChange = (e) => {
  const value = e.target.value;
  const contactNumberRegex = /^\d{0,10}$/;
  if(value === ''){
      setPropertyContactNo('');
      setPropertyAddressError('');
    return;
 }

  
  if ( contactNumberRegex.test(value)) {
        setPropertyContactNo(value);
        setPropertyContactNoError(''); // Clear error if input is valid
        return;

  } else {
    setPropertyContactNoError('');
    return;
  }
}

const handleTabpressPC =(e)=>{
  if (e.key === 'Tab' && propertycontactno.length < 10) {
    setPropertyContactNoError(' 10 digits required.');
  }

}

const handleTabpressOC =(e)=>{
  if (e.key === 'Tab' && ownercontact.length < 10) {
    setPropertyContactNoError(' 10 digits required.');
  }

}

 

const handleTabpressZIP =(e)=>{
  if (e.key === 'Tab' && zip.length < 6) {
    setZiperror(' 6 digits required.');
  }

}

const handleTabpressPAN =(e)=>{
  if (e.key === 'Tab' && pan.length < 10) {
    setPanError(' 10 characters required.');
  }

}
const handleTabpressGST =(e)=>{
  if (e.key === 'Tab' && gst.length < 15) {
    setGstError(' 15 characters required.');
  }

}
// Zip form uplad
const handleZipChange = (e) => {
  const value = e.target.value;
  const zipRegex = /^[1-9][0-9]{0,5}$/; 
  
  if(value===''){
    setZip('');
    setZiperror('');
    return;
  }
  
  if (zipRegex.test(value)) {
     setZip(value);
     setZiperror(''); // Clear error if input is valid
     return;
     
  } else {
    setZiperror('');
    return;
  }
}
//Owner name form upload
const handleOwnerNameChange = () => {
 
  setOwnerName(`${firstname} ${lastname}`);
  return;  
}
const handleOwnerContactChange = (e) => {
  // const value = e.target.value;
  // const contactNumberRegex =  /^\d{0,10}$/;   
  
  // if ( contactNumberRegex.test(value)) {
  //    setOwnerContact(value);
  //    setOwnerContactError(''); // Clear error if input is valid
  // } else {
  //   setOwnerContactError('Invalid contact number');
  // }
  setOwnerContact(`${receivedcontactno}`)
  return;
}


const handlePANChange = (e) => {
  const value = e.target.value;
  const panRegex =  /^[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}$/; 
  if(value===''){
     setPan('');
     setPanError('');
     return;
  }
  if (panRegex.test(value)) {
     setPan(value);
     setPanError(''); // Clear error if input is valid
     return;
  } else {
    setPanError('');
    return;

  }
}

{/* 
GST Regex Explanation:

Regex: /^[0-9]{0,2}[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}[A-Z0-9]{0,1}[Z]{0,1}[A-Z0-9]{0,1}$/
1) ^ : Indicates the start of the string.
2) [0-9]{0,2} :
    Matches 0 to 2 digits (numerical characters 0-9).
    Represents the first part of the GST ID, typically the state code.
3) [A-Z]{0,5}:
    Matches 0 to 5 uppercase letters (A-Z).
    Likely to represent an alphanumeric identifier, such as PAN (Permanent Account Number), 
    which has an alphabetical component.
4) [0-9]{0,4}:
     Matches 0 to 4 digits (0-9).
     Could represent the numerical portion of a PAN or other part of the GST structure.
5) [A-Z]{0,1}:
     Matches 0 or 1 uppercase letter (A-Z).
     Might represent a category or type identifier.
6) [5A-Z0-9]{0,1}:
    Matches 0 or 1 alphanumeric character (A-Z or 0-9).
    Represents a flexible field that can accept either a letter or digit.
7) [Z]{0,1}:
    Matches 0 or 1 literal 'Z'.
    In GST IDs, 'Z' often appears as a fixed value 
    toward the end of the identifier.
8) [A-Z0-9]{0,1}:
    Matches 0 or 1 alphanumeric character (A-Z or 0-9).
    Represents a check digit or additional field.
9) $:
    Indicates the end of the string.
*/}
const handleGSTChange = (e) => {
  const value = e.target.value;
  const gstRegex =   /^[0-9]{0,2}[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}[A-Z0-9]{0,1}[Z]{0,1}[A-Z0-9]{0,1}$/; 
  if(value ===''){
    setGst('');
    setGstError('');
  }
  
  if ( gstRegex.test(value)) {
        setGst(value); 
        setGstError(''); // Clear error if input is valid
        return;
  } else {
        setGstError('');
        return;
  }
}

{/* TANRegex
  Regex String: ^[A-Z]{4}\d{5}[A-Z]$
  Explanation:
      1) ^ - Matches the start of the string.
      2) [A-Z]{4} - Ensures the first 4 characters are uppercase English letters (A-Z), and exactly 4 of them.
      3) \d{5} - Ensures the next 5 characters are digits (0-9), and exactly 5 of them.
      4) [A-Z] - Ensures the last character is an uppercase English letter.
      5) $ - Matches the end of the string.

   
*/}




const handleTANChange = (e) => {
  const value = e.target.value;
  console.log(value);
  const TANRegex =  /^[A-Z]{0,4}\d{0,5}[A-Z]?$/;

  if (value === '') {
    setTAN('');
    setTANError('');
    return; // Stop further execution for empty input
  }

  if (TANRegex.test(value)) {
    setTAN(value);
    setTANError('');
  } else {
    setTANError('');
  }
};


const skipbtn=()=>{
  navigate('/about-us')
}









    
  return (
    <>
    <div className="PropertyDetails" style={{fontSize:'0.7em',fontFamily:'Poppins'}} >
    <div className="container mx-4 my-6 mt-10">
      <h1 className="font-bold text-center text-purple-500 text-4xl mb-6">Register Your Property</h1>
    </div>
    <div className="container mx-40 mt-8 my-2" 
          style={{display:'flex', justifyContent:'center',gap:'4em'}}>
            {/* <div className="image"  >
          <img src ={SignUpPage_img} alt="Img"/>
        </div> */}
      <div className="flex gap-8 relative w-3/4" style={{width:'500em'}}> {/* Added relative positioning */}
        {/* Left Side - Property Form */}
        <div className="w-2/3">
          
          <div className="bg-white rounded-lg shadow-2xl">
            <form className="px-6 pt-6 pb-8">
            <div className="mb-6 text-center" style={{display:'flex',justifyContent:'right'}}>
            <button class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-4 rounded" onClick={skipbtn}>
             Skip
            </button>
               
              </div>
              <div className="mb-6 text-center" style={{display:'flex',justifyContent:'center'}}>
                <h2 className="font-bold text-violet-500 text-xl">Property Details</h2>
               
              </div>
              
              <div className="grid grid-cols-2 gap-4">
          
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Property Name</label>
                  <input
                    type="text"
                    id="propname"
                    placeholder="Enter property name "
                    value={propertyname}
                    className="w-full border border-gray-300 
                                rounded py-2 px-3 
                                leading-tight focus:border-gray-900 
                                focus:ring-2 focus:ring-gray-500"
                                onChange={handlePropertyNameChange}        
                  />
                     { propertynameerror && <div className="text-red-500 text-sm mt-2">{propertynameerror}</div>}
                </div>


                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Property Contact</label>
                  <input
                    type="text"
                    id="cont"
                    placeholder="Enter property contact Number"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    value={propertycontactno}
                    onChange={handlePropertyContactChange}   
                    onKeyDown={handleTabpressPC}
                  />
                   { propertycontactnoerror && <div className="text-red-500 text-sm mt-2">{propertycontactnoerror}</div>}
                </div>
                  
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Property Address</label>
                  <input
                    type="text"
                    id="propadd"
                    placeholder="Enter property address here"
                    className="w-full border border-gray-300 rounded py-2 px-3 
                               leading-tight focus:border-gray-900 focus:ring-2 
                               focus:ring-gray-500"
                    value={propertyaddress}
                    onChange={handlePropertyAddressChange}   
                  />
                   {propertyaddresserror && <div className="text-red-500 text-sm mt-2">{propertyaddresserror}</div>}
                </div>
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    placeholder="Enter Zip Code"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    value={zip}
                    onChange={handleZipChange}     
                    onKeyDown={handleTabpressZIP}                
                  />
                     {ziperror && <div className="text-red-500 text-sm mt-2">{ziperror}</div>}

                </div>

                
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Rooms</label>
                <input
                  type="number"
                  min="0"
                  value={rooms}
                   className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  onChange={handleRoomChange}
                  placeholder="Enter number of rooms"
                />
                {rooms < 5 && rooms !== '' && (
                  <p style={{ color: "red" }}>Enter a value of 5 or more</p>
                )}
          {roomserror && <div className="text-red-500 text-sm mt-2">{roomserror}</div>}           

      </div>

      <div className="mb-4">
      <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Subscription Plan</label>
        <input
          type="text"
          id="subp"
          placeholder="Enter Subscription Plan"
          value={subplan}
          readOnly
          className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
          
        />
         
       
      </div>

                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Owner Name</label>
                  <input
                    type="text"
                    id="ownName"
                    placeholder="Enter Owner Name"
                    value={ownername}
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={handleOwnerNameChange}
                      />
                      {ownernameerror && <div className="text-red-500 text-sm mt-2">{ownernameerror}</div>}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Owner Contact</label>
                  <input
                    type="text"
                    id="ownNo"
                    placeholder="Owner Contact Number"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    value={ownercontact}
                    onChange={handleOwnerContactChange}
                    onKeyDown={handleTabpressOC}
                 />
                  { ownercontacterror && <div className="text-red-500 text-sm mt-2">{ownercontacterror}</div>}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Rooms</label>
                <input
                  type="number"
                  min="0"
                  value={rooms}
                   className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  onChange={handleRoomChange}
                  placeholder="Enter number of rooms"
                />
                {rooms < 5 && rooms !== '' && (
                  <p style={{ color: "red" }}>Enter a value of 5 or more</p>
                )}
          {roomserror && <div className="text-red-500 text-sm mt-2">{roomserror}</div>}           

      </div>

      <div className="mb-4">
      <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Subscription Plan</label>
        <input
          type="text"
          id="subp"
          placeholder="Enter Subscription Plan"
          value={subplan}
          readOnly
          className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
          
        />
         
       
      </div>


      
      
             

                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>PAN No</label>
                  <input
                    type="text"
                    id="panNo"
                    placeholder="Enter PAN No"
                    value={pan}
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={handlePANChange}
                    onKeyDown={handleTabpressPAN}
                  />
                   { panerror && <div className="text-red-500 text-sm mt-2">{panerror}</div>}
                </div>

                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>GST No</label>
                  <input
                    type="text"
                    id="gstNo"
                    placeholder="Enter GST No"
                    value={gst}
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={handleGSTChange}
                    onKeyDown={handleTabpressGST}
                  />
                   { gsterror && <div className="text-red-500 text-sm mt-2">{gsterror}</div>}
                </div>
                {/* Owner's Image */}
                <div className="mb-4 flex items-center space-x-2" style={{display:'block'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
                      <h1 className="text-gray-800 font-semibold cursor-pointer"
                    onClick={handleOwnerH1Click} >Owner's Image</h1>
                  <input
                    type="file"
                    accept="image/*"
                    ref={ownerFileInputRef}
                
                    className="hidden"
                    onChange={handleOwnerImgChange}
                  />

                      {ownerimagepreview && (
                            <div className="image-preview">
                                <img 
                                    src={ownerimagepreview} 
                                    alt="Preview" 
                                    style={{ width: '100px', height: '80px', marginTop: '10px' }}   
                                />
                            </div>
                        )}

             { ownerimageerror && <div className="text-red-500 text-sm mt-2">{ownerimageerror}</div>}
                      
                </div>
                {/* Property Image */}
                <div className="mb-4 flex items-center space-x-2" style={{display:'block'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                    </svg>
                      <h1 className="text-gray-800 font-semibold cursor-pointer"
                     onClick={handlePropertyH1Click}>Property Image</h1>
                  <input
                    type="file"
                    accept="image/*"
                    ref={propertyFileInputRef}
                 
                    className="hidden"
                    onChange={handlePropertyImgChange}
                  />

{          propertyimagepreview && (
                            <div className="image-preview">
                                <img 
                                    src={propertyimagepreview} 
                                    alt="Preview" 
                                    style={{ width: '100px', height: '80px', marginTop: '10px' }}  
                                />
                            </div>
                        )}
            
            {  propertyimageerror && <div className="text-red-500 text-sm mt-2">{propertyimageerror}</div>}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Check In Time</label>
                  <input
                    type="time"
                    id="checkin"
                    placeholder="Check-In Time"
                    step="1"
                    className="w-full border border-gray-300 round`ed py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    value={checkin}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                  { checkinerror && <div className="text-red-500 text-sm mt-2">{checkinerror}</div>}
                   
                </div>

                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Check Out Time</label>
                  <input
                    type="time"
                    id="checkout"
                    step="1"
                    placeholder="Check Out time"
                    value={checkout}
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                   { checkouterror && <div className="text-red-500 text-sm mt-2">{checkouterror}</div>}
                   
                </div>
                
                <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>TAN</label>
                  <input
                    type="text"
                    id="TAN"
                   
                    placeholder="TAN Number"
                    value={tan}
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={handleTANChange}
                    required
                  />
                    {tanerror && <div className="text-red-500 text-sm mt-2">{tanerror}</div>}
                   
                </div>

                
                <div className="mb-4">
                {/* <label className="block text-sm font-bold mb-2" htmlFor="passwd" style={{color:'grey',fontWeight:'500'}}>Check Out Time</label>
                  <input
                    type="time"
                    id="checkout"
                    step="1"
                    placeholder="Check Out time"
                    value={checkout}
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  /> */}
                   { checkouterror && <div className="text-red-500 text-sm mt-2">{checkouterror}</div>}
                   
                </div>
              </div>
              

 

                

              <div className="mt-6 mx-20" style={{display:'flex',justifyContent:'left'}}>
                {/* <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleShortcut}
                  style={{backgroundColor:'#fff'}}
                   
                >
                  Next
                </button> */}


              </div>
            </form>
          </div>
        </div>

        {/* Vertical Line Separator */}
        {/* <div className="absolute right-1/3 top-8 h-full border-l border-black-300"></div>  */}

        {/* Right Side - Subscription Summary */}
        <div className="w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 mt-20" style={{marginTop:'0px',width:'18rem'}}>
            <h2 className="text-purple-500 text-2xl mb-6" style={{color:'rgb(139 92 246 / var(--tw-text-opacity))',
                                                                fontWeight:'700',fontSize:'1.165em'}}>Subscription Summary</h2>
            
            
            <div className="checkboxes" style={{display:'flex',gap:'0.75em'}}>
               
            </div>
            
            <div className="checkboxes" style={{display:'flex',gap:'0.75em'}}>
 
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="6months"
                      
                      name="subscription"
                      value="6 Months"
                      checked={duration === "6 Months"}
                      onChange={handleDurationChange}
                    />
                    <label htmlFor="6months">6 Months</label>
                  </div>
                  <div className="flex items-center gap-1">
                  <input
                      type="radio"
                      value="12 Months"
                      checked={duration === "12 Months"}
                      onChange={handleDurationChange}
                    />
                    <label htmlFor="12months">12 Months</label>
                  </div>
                  
           
              </div> 
                 
         
           
            <div className="flex gap-6 mb-6" style={{display:'block'}}>
              <table>
              <tbody>
                  <tr style={{gap:'3em'}}>
                    <td>Base price</td>
                    <td> </td>
                    <td style={{justifyContent:'right',alignItems:'right'}}>{summary.basePrice > 0 ? summary.basePrice : null}</td>
                  
                  </tr>
                  <tr>
                    <td>Taxes</td>
                    <td> </td>
                    <td style={{display:'flex',justifyContent:'right'}}>{summary.taxes > 0 ? summary.taxes : null}</td>
                  </tr>
                  <tr>
                    <td>Discount</td>
                    <td> </td>
                   
                    <td>{summary.discount > 0 ? summary.discount : null}</td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td> </td>
                    <td>{summary.total > 0 ? summary.total : null}</td>
                  </tr>
                </tbody>
              </table>

            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 
               rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
              Make Payment
            </button>

            
          </div>

          


        </div>
      </div>
    </div>

    <a href='/profile-details'>Shortcut</a>
    </div>

    </>
  )
}

export default PropertyDetailsOne;
