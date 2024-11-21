
import {React,useState,useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import SubFormImg from '../assets/SubFormimg.png'


const PropertyDetailsOne = () => {

  /*States*/
const [propertyname,setPropertyName]=useState('')
const [propertynameerror,setPropertyNameError]=useState('')

const [propertyaddress,setPropertyAddress]=useState('')
const [propertyaddresserror,setPropertyAddressError]=useState('')
const [propertycontactno,setPropertyContactNo]=useState('')
const [propertycontactnoerror,setPropertyContactNoError]=useState('')
const [zip,setZip]=useState('');
const [ziperror,setZiperror]=useState('');
 
const [roomserror,setRoomsError]=useState('');
 
const [taxes,setTaxes]=useState('');
 
const [ownername,setOwnerName]=useState('');
const [ownernameerror,setOwnerNameError]=useState('');
const [ownercontact,setOwnerContact]=useState('');
const [ownercontacterror,setOwnerContactError]=useState('');
const [gst,setGst]=useState('');
const [gsterror,setGstError]=useState('');
const [pan,setPan]=useState('');
const [panerror,setPanError]=useState('');
 
 
const [ownerimage,setOwnerImage]=useState('');
const [propertyimage,setPropertyImage]=useState('');
const [propertyimageerror,setPropertyImageError]=useState('');
const [ownerimageerror,setOwnerImageError]=useState('');

const [checkintimeerror,setCheckInTimeError]=useState('');
const [checkouttimeerror,setCheckOutTimeError]=useState('');

const [rooms, setRooms] = useState("");
const [subplan, setSubPlan] = useState("");
const [duration, setDuration] = useState("6 Months");
const [summary, setSummary] = useState({ basePrice: 0, taxes: 0, discount: 0, total: 0 });

/*Regex Checkers*/
const contactNumberRegex = /^\d{10}$/; //Only numbers,no special characters,less than 10
const propertynameregex = /^[a-zA-Z0-9]+$/;//Only letters and numbers,no special characters
const propertyaddressregex = /^[a-zA-Z0-9]+$/;//Only letters and numbers,no special characters
const nameRegex = /^[A-Za-z\s]+$/;//Only letters,no numbers and special characters
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
const gstRegex = /^[a-zA-Z0-9]{1,10}$/;
const zipRegex = /^\d{6}$/; //Only numbers,no special characters,less than 6


 

 /*Image upload handling functions*/

 /*File input definations */
const ownerFileInputRef = useRef(null);
const propertyFileInputRef = useRef(null);

const handleOwnerImgChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setOwnerImage(imageURL);
  }
};
/*Property Image Change function */
const handlePropertyImgChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setPropertyImage(imageURL);
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
const handleCheck = ()=>{
  /*Property Name Error Check*/
   if(!propertyname){
    setPropertyNameError('Property Name Required');
    
   }else if(!propertynameregex.test(propertyname)){
    setPropertyNameError('Property name can contain only letters and numbers.');
   }else{
    setPropertyNameError('');
   }

   /*Property Address Error Check*/
   if(!propertyaddress){
    setPropertyAddressError('Property Address Required')
  
   }else if(!propertyaddressregex.test(propertyaddress)){
    setPropertyAddressError('Property address can contain only letters and numbers.');
   }else{
    setPropertyAddressError('');
   }

  
   /*Property Contact Number Check*/
   if(!propertycontactno){
    setPropertyContactNoError('Property Contact Number Required')
 
   }else if(!contactNumberRegex.test(propertycontactno)){
    setPropertyContactNoError('Contact Number cannot contain letters or special characters,or more than 10 digits');
   }

   if(!ownername){
    setOwnerNameError('Owner Name Required')
 
   }else if(!nameRegex.test(ownername)){
    setOwnerNameError('Name cannot contain number or special characters.');
   }else{
    setOwnerNameError('');
   }
   /*Owner contact number Check*/
   if(!ownercontact){
    setOwnerContactError('Owner Contact Number Required')
   
   }else if(!contactNumberRegex.test(ownercontact)){
    setOwnerContactError('Contact Number cannot contain letters or special characters');
   }else{
    setOwnerContactError('')
   }
   /*PAN Check*/

   if(!pan){
    setPanError('PAN Number Required')
 
   }else if(!panRegex.test(pan)){
    setPanError('Pan card cannot special characters,gaps,or more than 10 characters');
   }else{
    setPanError('');
   }
 

   if(!propertyimage){
    setPropertyImageError("Property Image is required")
   }else{
    setPropertyImageError('')
   }

   if(!ownerimage){
    setOwnerImageError("Owner mage is required")
   }else{
    setOwnerImageError('')
   }

   /*ZIP Check */
   if(!zip){
    setZiperror("ZIP Code is required")
   }else if(!zipRegex.test(zip)){
    setZiperror('Zip can contain only numbers,not more than 10')
   }else{
    setZiperror('')
   }
   /*GST Check*/

   if(!gst){
    setGstError('GST ID is requried')
   }else if(!gstRegex.test(gst)){
    setGstError('GST ID cannot special characters,gaps,or more than 10 characters')
   }else{
    setGstError('')
   }

/*Rooms Check*/

if(!rooms){
 setRoomsError('Rooms cannot be empty')
 } else{
  setRoomsError('')
 }


    




   
}
 
/*Handle Click Function*/
const handleClick =  async (e)=>{
  e.preventDefault();  
  handleCheck();

}

 
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
  if (rooms >= 5 && rooms < 10) selectedPlan = "Silver";
  else if (rooms >= 10 && rooms < 20) selectedPlan = "Gold";
  else if (rooms >= 20) selectedPlan = "Platinum";

  const planDetails = plans[selectedPlan]?.[duration] || { basePrice: 0, taxes: 0, discount: 0 };
  setSubPlan(selectedPlan);
  setSummary({
    ...planDetails,
    total: planDetails.basePrice + planDetails.taxes - planDetails.discount,
  });
};
/*Handle Room Change*/
const handleRoomChange = (e) => {
  const value = parseInt(e.target.value, 10) || 0;
  setRooms(value);
  if (value >= 5) {
    updatePlanAndSummary(value);
  } else {
    setSubPlan("");
    setSummary({ basePrice: 0, taxes: 0, discount: 0, total: 0 });
  }
};

/*Handle Duration Change*/
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
                  <input
                    type="text"
                    id="propname"
                    placeholder="Property Name"
                    value={propertyname}
                    className="w-full border border-gray-300 
                                rounded py-2 px-3 
                                leading-tight focus:border-gray-900 
                                focus:ring-2 focus:ring-gray-500"
                                onChange={(e) => setPropertyName(e.target.value)}        
                  />
                     { propertynameerror && <div className="text-red-500 text-sm mt-2">{propertynameerror}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="propadd"
                    placeholder="Property Address"
                    className="w-full border border-gray-300 rounded py-2 px-3 
                               leading-tight focus:border-gray-900 focus:ring-2 
                               focus:ring-gray-500"
                    value={propertyaddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}   
                  />
                   {propertyaddresserror && <div className="text-red-500 text-sm mt-2">{propertyaddresserror}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="cont"
                    placeholder="Property Contact Number"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    value={propertycontactno}
                    onChange={(e) => setPropertyContactNo(e.target.value)}   
                  />
                   { propertycontactnoerror && <div className="text-red-500 text-sm mt-2">{propertycontactnoerror}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="zip"
                    placeholder="Zip Code"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}                     
                  />
                     {ziperror && <div className="text-red-500 text-sm mt-2">{ziperror}</div>}

                </div>

                <div className="mb-4">
                <input
                  type="number"
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
        <input
          type="text"
          id="subp"
          placeholder="Subscription Plan"
          value={subplan}
          readOnly
          className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
          
        />
         
       
      </div>


      
      
                <div className="mb-4">
                  <input
                    type="text"
                    id="ownName"
                    placeholder="Owner Name"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={(e)=>setOwnerName(e.target.value)}
                      />
                      {ownernameerror && <div className="text-red-500 text-sm mt-2">{ownernameerror}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="ownNo"
                    placeholder="Owner Contact Number"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                    onChange={(e)=>setOwnerContact(e.target.value)}
                 />
                  { ownercontacterror && <div className="text-red-500 text-sm mt-2">{ownercontacterror}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="panNo"
                    placeholder="PAN No"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                   { panerror && <div className="text-red-500 text-sm mt-2">{panerror}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    id="gstNo"
                    placeholder="GST No"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
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

          {ownerimage && (
                <div className="mt-4">
                    <img
                        src={ownerimage}
                        alt="Selected"
                        className="max-w-full h-auto rounded-lg shadow"
                         style={{height:"100px",width:"100px"}}
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

          {propertyimage && (
                <div className="mt-4">
                    <img
                        src={propertyimage}
                        alt="Selected"
                        className="max-w-full h-auto rounded-lg shadow"
                        style={{height:"100px",width:"100px"}}
                    />
                  
                </div>
            )}
            
            { propertyimageerror && <div className="text-red-500 text-sm mt-2">{propertyimageerror}</div>}
                </div>

                <div className="mb-4">
                  <label style={{fontSize:'1.5em'}}>Check In Time</label>
                  <input
                    type="time"
                    id="checkin"
                    placeholder="Check-In Time"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                   
                </div>

                <div className="mb-4">
                <label style={{fontSize:'1.5em'}}>Check Out Time</label>
                  <input
                    type="time"
                    id="checkout"
                    placeholder="Check Out time"
                    className="w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:border-gray-900 focus:ring-2 focus:ring-gray-500"
                  />
                   
                </div>
              </div>
              

 

                

              <div className="mt-6 mx-20" style={{display:'flex',gap:'10px'}}>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleClick}
                >
                  Next
                </button>

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
               rounded focus:outline-none focus:shadow-outline" onClick={()=>knowsub()}>
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
