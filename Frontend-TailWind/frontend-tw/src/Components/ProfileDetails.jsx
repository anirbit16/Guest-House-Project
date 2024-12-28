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

const ProfileDetails = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const receivedemail = useState(location.state.sentemail)
  const receivedpan = useState(location.state.pan)
  const receivedcontact = useState(location.state.sentcontactno)
  const emailvalue = receivedemail[0];
  const panvalue = receivedpan[0];
 console.log("ewwerwer",receivedcontact);
  
 
  const [adminData, setAdminData] = useState(null);
  const [propertyData, setPropertyData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [imageSourceUrl, setImageSourceUrl] = useState("");
  const [rcownerimage,setRcOwnerImage] = useState('');
  const [rcpropimage,setRcPropImage] = useState('');
  console.log("Email Value: ",emailvalue)
  console.log("Contact No Array Value: ",receivedcontact)
  const  contactstring = receivedcontact[0];
  console.log("Contact String: ",contactstring);
  console.log("PAN Value: ",panvalue)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contactno: '',
    propertyname: '',
    propertyaddress: '',
    propertycontactno: '',
    zip: '',
    rooms: '',
    subplan: '',
    taxes: '',
    ownername: '',
    ownercontact: '',
    gst: '',
    pan: '',
    ownerimage: '',
    propertyimage: '',
    checkin: '',      
    checkout: '',
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyResponse = await axios.get(`http://192.168.1.16:8080/props/getInfoByPan/FEGTYR1826C`);
        const adminResponse = await axios.get(`http://192.168.1.16:8080/signups/getAllsignupsByContactNo/6098877654`)
        
        setPropertyData(propertyResponse.data);
        setAdminData(adminResponse.data);
        const formattedOwnerImgPath = propertyResponse.data.ownerimage.replace(/\\/g, '/');
        const formattedPropImgPath = propertyResponse.data.propertyimage.replace(/\\/g, '/');

        const baseURL = "http://192.168.1.16:8080";
        const fullOwnerImageURL = `${baseURL}/${formattedOwnerImgPath}`;
        const fullPropImageURL = `${baseURL}/${formattedPropImgPath}`;
  
        setRcOwnerImage(fullOwnerImageURL);
        setRcPropImage(fullPropImageURL);
       


    
  
        console.log("Property Data", propertyResponse.data);
   
        console.log("Contact Value: ", propertyResponse.data.ownername);
     
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchData();
  }, [panvalue,emailvalue]); // Removed dependency on adminData to avoid unnecessary fetch calls.
  console.log("Admin Data: ",adminData)
  console.log("Property Data: ",propertyData)
  useEffect(() => {
    if (adminData && propertyData) {
      setFormData({
       firstname: adminData.firstname || '',
       lastname: adminData.lastname || '',
       email: adminData.email || '',
       contactno: adminData.contactno || '',
      propertyname: propertyData.propertyname || '',
       propertyaddress: propertyData.propertyaddress || '',
       propertycontactno: propertyData.propertycontactno || '',
       zip: propertyData.zip || '',
       rooms: propertyData.rooms || '',
       subplan: propertyData.subplan || '',
       taxes: propertyData.taxes || '',
       ownername: propertyData.ownername || '',
       ownercontact: propertyData.ownercontact || '',
       gst: propertyData.gst || '',
       pan: propertyData.pan || '',
       ownerimage: propertyData.ownerimage || '',
      //  propertyimage: propertyData.propertyimage || '',
       checkin: propertyData.checkin || '',
       checkout: propertyData.checkout || '',
      });
    }
    console.log("Owner Img: ",formData.ownerimage)
    
  }, [adminData, propertyData]); // Update formData when adminData or propertyData changes.
 
  
   
 
 
  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
   
   
    setFormData({ ...FormData, [e.target.name]: e.target.value });
    console.log("N:",e.target.name)
    console.log("V: ",e.target.value)
   
 
  };

  const handleOwnerImgChange=(e)=>{
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setRcOwnerImage(imageURL);
    }

  }

  
  const handlePropertyImgChange=(e)=>{
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setRcPropImage(imageURL);
    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sent FD: ", formData);
  
    try {
      // Create a single FormData instance for both text and file data
      const textPayload = new FormData();
      const imgPayload = new FormData();
      
      // Append all text fields
      textPayload.append('firstname', formData.firstname);
      textPayload.append('lastname', formData.lastname);
      textPayload.append('email', formData.email);
      textPayload.append('contactno', formData.contactno);
      textPayload.append('propertyname', formData.propertyname);
      textPayload.append('propertyaddress', formData.propertyaddress);
      textPayload.append('propertycontactno', formData.propertycontactno);
      textPayload.append('zip', formData.zip);
      textPayload.append('rooms', formData.rooms);
      textPayload.append('subplan', formData.subplan);
      textPayload.append('taxes', formData.taxes);
      textPayload.append('ownername', formData.ownername);
      textPayload.append('ownercontact', formData.ownercontact);
      textPayload.append('gst', formData.gst);
      textPayload.append('pan', formData.pan);
      textPayload.append('tan', formData.tan);
 
      // Append file fields only if they exist
      if (formData.ownerimage) {
         imgPayload.append('ownerimage', formData.ownerimage);
      }
      if (formData.propertyimage) {
         imgPayload.append('propertyimage', formData.propertyimage);
      }
    
      const patchRequests = [
        axios.patch(
          `http://localhost:8080/props/updateDetails/6098877654/FEGTYR1826C`,
          textPayload,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        ),
        axios.patch(
          `http://192.168.1.16:8080/props/updateProperty/${panvalue}`,
          imgPayload,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        ),
      ];
    
      // Execute all requests simultaneously
      const responses = await Promise.all(patchRequests);
      
      // Check if all requests were successful
      if (responses.every(response => response.status === 200)) {
        console.log("All patches success");
        alert("Data Edit Successful");
      } else {
        throw new Error("One or more requests failed");
      }
    } catch (error) {
      console.error("Error details:", error);
      alert("Error editing data: " + (error.response?.data?.message || error.message));
    } finally {
      setEditMode(false);
    }
  };
 


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Sent FD: ",formData)
   
  //   try{
  //     const patchRequests = [


  //       axios.patch(`http://192.168.1.16:8080/signups/editSignUPdetails/${contactstring}`, formData,{
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       }),

  //       axios.patch(`http://192.168.1.16:8080/props/editaProperty/${panvalue}`, formData,{
  //         headers: {
  //           'Content-Type': 'application/json',yupu
  //         }
  //       }),
  //       axios.patch(`http://192.168.1.16:8080/props/editOwnerImage/${panvalue}`, formData,{
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         }
  //       }),

  //       axios.patch(`http://192.168.1.16:8080/props/editPropertyImage/${panvalue}`, formData,{
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         }
  //       })
        
  //     ];
  //     await Promise.all(patchRequests);
  //     console.log("Both patches success");
  //     setEditMode(false);
  //     alert('Edit Successfull');
  //   } catch(error){
  //     console.log('Error saving data',error);
  //     alert("Error editing data.");
  //   }
  // };



  // const handleSave = async () => {
  //   try {
  //     await axios.patch(`http://192.168.1.16:8080/props/editaProperty/`, propertyData);
  //     await axios.patch(`http://192.168.1.16:8080/props/editaProperty/`, adminData);
  //     setEditMode(false); // Exit edit mode
  //   } catch (error) {
  //     console.error("Error saving data: ", error);
  //   }
  // };

  

const handleEditChange = (e)=>{

}
//   const handleInputChange = (event, setData) => {
//     const { name, value } = event.target;
//     console.log(name)
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value, // Directly update the field
//     }));
//   };
  


//  const roughpage=()=>{
//   navigate('/rough-page')
//  }
 
 
 
  return (
    <>
 
      
 
 <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
       
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white p-6 shadow-md rounded-md">
        {/* Column 1 */}
        
  
        <div className="bg-white p-6">
          {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 1</h2> */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="name1">
                First Name
              </label>
              <input
                type="text"
                id="name1"
                name="firstname"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                value={formData.firstname}
                onChange={handleChange}
                disabled={!editMode}
                 
              />
            </div>
            <div>
               
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              Contact Number
              </label>
              <input
                type="email"
                id="email1"
                name="contactno"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.contactno}
                onChange={handleChange}
                disabled={!editMode}
                
                 
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             ZIP
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
               className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.zip}
                onChange={handleChange}
                disabled={!editMode}
                
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              GST No
              </label>
              <input
                type="text"
                id="gst"
                name="gst"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.gst}
                onChange={handleChange}
                disabled={!editMode}
               
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
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email2">
               Property Name
              </label>
              <input
                type="email"
                id="email2"
                name="propertyname"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.propertyname}
                onChange={handleChange}
                disabled={!editMode}
            
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
               Property Contact
              </label>
              <input
                type="text"
                id="propcontact"
                name="propertycontactno"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.propertycontactno}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>

            <div>
            <label className="block text-gray-600 mb-1" htmlFor="name3">
               Owner Image
              </label>
 
                    <div style={{ position: 'relative', display: 'inline-block', height: '100px', width: '100px' }}>
                    {/* Display the image */}
                    <img
                      src={rcownerimage}// Placeholder if no image is selected
                      alt="Owner"
                      style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                    />
                    {/* Invisible input for file selection */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleOwnerImgChange}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        opacity: 0,
                        cursor: 'pointer' 
                      }}
                      disabled={!editMode}
                    />
                  </div>
          
           
           
      
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
                name="email"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your name"
    
                value={formData.email}
                onChange={handleChange}
                // onChange={(e) => handleInputChange(e, "email", setAdminData)}
                disabled={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              Property Address
              </label>
              <input
                type="text"
                id="propaddress"
                name="propertyaddress"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.propertyaddress}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
               PAN
              </label>
              <input
                type="text"
                id="zip"
                name="pan"
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.pan}
                onChange={handleChange}
                disabled={!editMode}
             
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Property Image
              </label>
              {rcpropimage && (
        <img src={rcpropimage} alt="Owner"  style={{height:'100px',width:'100px'}} />
              )}

        
            </div>
            


 
          </form>

        </div>
      </div>
      <div className="mt-4">
              {editMode ? (
                <button
                  className="btn btn-success mr-2"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              ) : null}
              <button className="rounded-md" onClick={handleEditToggle} style={{backgroundColor:'#006699',padding:'5px 25px 5px 25px',color:'#fff'}}> 
                {editMode ? "Cancel" : "Edit"}
              </button>
            </div>
    </div>
    </>
  )
}

export default ProfileDetails




 