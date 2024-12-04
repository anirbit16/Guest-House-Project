
import {useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import SubFormImg from '../assets/SubFormimg.png'
import axios from 'axios'
 


import './Landingpage.css'

const PropertyDetailsOne = () => {

  // Form Values

                                 
  /*States*/
const location = useLocation();
const [firstname, setFirstName] = useState(location.state.firstname);
const [lastname,  setLastName] = useState(location.state.lastname);
const [contactno,setContactNo]= useState(location.state.contactno);
 
const [propertyname,setPropertyName]=useState('')
const [propertynameerror,setPropertyNameError]=useState('')

const [propertyaddress,setPropertyAddress]=useState('')
const [propertyaddresserror,setPropertyAddressError]=useState('')
const [propertycontactno,setPropertyContactNo]=useState('')
const [propertycontactnoerror,setPropertyContactNoError]=useState('')

const [zip,setZip]=useState('');
const [ziperror,setZiperror]=useState('');

 
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

const [checkinerror,setCheckInError]=useState('');
const [checkouterror,setCheckOutError]=useState('');
const [ownerimagepreview, setOwnerImagePreview] = useState('');
const [propertyimagepreview, setPropertyImagePreview] = useState('');
const [rooms, setRooms] = useState("");
const [subplan, setSubPlan] = useState("");
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

/*Checker function*/
 
 
/*Handle Click Function*/
const handleClick = async (e) => {
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
  } else {
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
  }   else {
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
  }  else {
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
       
 
      const response = await axios.post('http://192.168.1.7:8080/props/registerProperty', formdata, {
          'Content-Type': 'multipart/form-data'
      });
      if(response.status === 200 ){
        alert('Upload Successful')
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
  let selectedPlan = "";
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
    setSubPlan("");
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
  const propertynameregex =  /^[a-zA-Z0-9, ]+$/; 
  
  if (propertynameregex.test(value)) {
    setPropertyName(value);
    setPropertyNameError(""); // Clear error if input is valid
  } else {
    setPropertyNameError('Invalid property name');
  }
};

 

// Property Address Upload 
const handlePropertyAddressChange = (e) => {
  const value = e.target.value;
  const propertyaddressregex =/^[a-zA-Z0-9\s,.'#-/]+$/;
  
  if (propertyaddressregex.test(value)) {
    setPropertyAddress(value);
    setPropertyAddressError(''); // Clear error if input is valid
  } else {
    setPropertyAddressError('Invalid property address');
  }
}
//  Contact Number Form Upload


const handlePropertyContactChange = (e) => {
  const value = e.target.value;
  const contactNumberRegex = /^\d{0,10}$/;  
  
  if ( contactNumberRegex.test(value)) {
    setPropertyContactNo(value);
    setPropertyContactNoError(''); // Clear error if input is valid
  } else {
    setPropertyContactNoError('Invalid contact number');
  }
}

// Zip form uplad
const handleZipChange = (e) => {
  const value = e.target.value;
  const zipRegex = /^[1-9][0-9]{0,5}$/;    
  
  if (zipRegex.test(value)) {
     setZip(value);
     setZiperror(''); // Clear error if input is valid
  } else {
    setZiperror('Invalid zip code');
  }
}
//Owner name form upload
const handleOwnerNameChange = () => {
 
  setOwnerName(`${firstname}${lastname}`)  
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
  setOwnerContact(`${contactno}`)
}


const handlePANChange = (e) => {
  const value = e.target.value;
  const panRegex =  /^[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}$/; 
  
  if (panRegex.test(value)) {
     setPan(value);
     setPanError(''); // Clear error if input is valid
  } else {
    setPanError('Invalid PAN ID');
  }
}

const handleGSTChange = (e) => {
  const value = e.target.value;
  const gstRegex =   /^[0-9]{0,2}[A-Z]{0,5}[0-9]{0,4}[A-Z]{0,1}[A-Z0-9]{0,1}[Z]{0,1}[A-Z0-9]{0,1}$/; 
  
  if ( gstRegex.test(value)) {
        setGst(value); 
        setGstError(''); // Clear error if input is valid
  } else {
        setGstError('Invalid GST ID');
  }
}











    
  return (
    <>
    <div className="PropertyDetails" style={{fontSize:'0.7em',fontFamily:'Poppins'}} >
    <div className="container mx-4 my-6 mt-10">
      <h1 className="font-bold text-center text-purple-500 text-4xl mb-6">Register Your Property</h1>
    </div>
    <div className="container mx-4 mt-8 my-4" 
          style={{display:'flex', justifyContent:'center'}}>
            <div className="image">
          <img src ={SubFormImg} alt="Img"/>
        </div>
      <div className="flex gap-8 relative"> {/* Added relative positioning */}
        {/* Left Side - Property Form */}
        <div className="w-2/3">
          
          <div className="bg-white rounded-lg shadow-sm">
            <form className="px-6 pt-6 pb-8">
              <div className="mb-6 text-center">
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
                  />
                     {ziperror && <div className="text-red-500 text-sm mt-2">{ziperror}</div>}

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
                {rooms < 5 && rooms !== "" && (
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
              </div>
              

 

                

              <div className="mt-6 mx-20" style={{display:'flex',gap:'10px'}}>
                {/* <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleClick}
                >
                  Next
                </button> */}

                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                   
                >
                  <Link to ='/about-us'>Skip</Link>
                
                  
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Vertical Line Separator */}
        {/* <div className="absolute right-1/3 top-8 h-full border-l border-black-300"></div>  */}

        {/* Right Side - Subscription Summary */}
        <div className="w-1/2">
          <div className="bg-white rounded-lg shadow-sm p-6 mt-20" style={{marginTop:'0px',width:'18rem'}}>
            <h2 className="text-purple-500 text-2xl mb-6" style={{color:'rgb(139 92 246 / var(--tw-text-opacity))',
                                                                fontWeight:'700',fontSize:'1.75em'}}>Subscription Summary</h2>
            
            
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
               rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>

    </>
  )
}

export default PropertyDetailsOne;
