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
  const emailvalue = receivedemail[0];
  const panvalue = receivedpan[0];
  const [adminData, setAdminData] = useState(null);
  const [propertyData, setPropertyData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  console.log("Email Value: ",emailvalue)
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
    checkin: '',
    checkout: '',
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyResponse = await axios.get(`http://192.168.1.7:8080/props/getInfoByPan/${panvalue}`);
        const adminResponse = await axios.get(`http://192.168.1.7:8080/signups/getAllsignupsByEmailId/${emailvalue}`);
        
        setPropertyData(propertyResponse.data);
        setAdminData(adminResponse.data);
  
        console.log("Property Data", propertyResponse.data);
        console.log("Property Owner", propertyResponse.data.ownername);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchData();
  }, [emailvalue]); // Removed dependency on adminData to avoid unnecessary fetch calls.
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
        checkin: propertyData.checkin || '',
        checkout: propertyData.checkout || '',
      });
    }
  }, [adminData, propertyData]); // Update formData when adminData or propertyData changes.
 
  console.log("FormData",formData)
   
 
 
  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSave = async () => {
    try {
      await axios.patch(`http://192.168.1.7:8080/props/editaProperty/`, propertyData);
      await axios.patch(`http://192.168.1.7:8080/props/editaProperty/`, adminData);
      setEditMode(false); // Exit edit mode
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };

  

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
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                value={formData.firstname}
                //  onChange={(e) => handleInputChange(e, setAdminData)}
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
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.contactno}
                // onChange={(e) => handleInputChange(e,setAdminData)}
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
               className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.zip}
                // onChange={(e) => handleInputChange(e,setPropertyData)}
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
               className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.gst}
                // onChange={(e) => handleInputChange(e, "gst", setPropertyData)}
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
                value={formData.lastname}
                // onChange={(e) => handleInputChange(e, "lastname", setAdminData)}
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
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.propertyname}
              
                // onChange={(e) => handleInputChange(e, "propertyname", setPropertyData)}
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
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.propertycontactno}
                // onChange={(e) => handleInputChange(e, "propertycontact", setPropertyData)}
                disabled={!editMode}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Owner Image
              </label>

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
                  className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your name"
                value={formData.email}
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
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.propertyaddress}
                // onChange={(e) => handleInputChange(e, "propertyaddress", setPropertyData)}
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
                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                placeholder="Enter your email"
                value={formData.pan}
                // onChange={(e) => handleInputChange(e, "pan", setPropertyData)}
                disabled={!editMode}
             
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Property Image
              </label>
              <img src={propertyData?.propertyimage || ''}/>
        
            </div>
            


 
          </form>

        </div>
      </div>
      <div className="mt-4">
              {editMode ? (
                <button
                  className="btn btn-success mr-2"
                  onClick={handleSave}
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




// import React,{useEffect, useState} from 'react'
// import {useNavigate,useLocation } from 'react-router-dom'
// import axios from 'axios';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Tooltip,
// } from "@material-tailwind/react";

// const ProfileDetails = () => {
  
//   const navigate = useNavigate();
//   const location = useLocation();
//   const receivedemail = useState(location.state.sentemail)
//   const receivedpan = useState(location.state.pan)
//   const emailvalue = receivedemail[0];
//   const panvalue = receivedpan[0];
//   const [adminData, setAdminData] = useState(null);
//   const [propertyData, setPropertyData] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   console.log("Email Value: ",emailvalue)
//   console.log("PAN Value: ",panvalue)
  
 
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const propertyResponse = await axios.get(`http://192.168.1.7:8080/props/getInfoByPan/${panvalue}`);
//         const adminResponse = await axios.get(`http://192.168.1.7:8080/signups/getAllsignupsByEmailId/${emailvalue}`);
        
//         setPropertyData(propertyResponse.data);
//         setAdminData(adminResponse.data);
//         console.log("Property Data", propertyResponse.data);
//         console.log("Property Owner", propertyResponse.data.ownername);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };
  
//     fetchData();
//   }, [panvalue, emailvalue]);
  

//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//   };


//   const handleSave = async () => {
//     try {
//       await axios.patch(`http://192.168.1.7:8080/props/editaProperty/`, propertyData);
//       await axios.patch(`http://192.168.1.7:8080/props/editaProperty/`, adminData);
//       setEditMode(false); // Exit edit mode
//     } catch (error) {
//       console.error("Error saving data: ", error);
//     }
//   };
  
//   // const handleInputChange = (event, setData) => {
//   //   const { name, value } = event.target;
//   //   console.log(name)
//   //   setData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value, // Directly update the field
//   //   }));
//   // };
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData); // Send updated data to parent or API
//   };

//  const roughpage=()=>{
//   navigate('/rough-page')
//  }
 
 
 
//   return (
//     <>
 
      
 
//  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
       
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white p-6 shadow-md rounded-md">
//         {/* Column 1 */}
        
  
//         <div className="bg-white p-6">
//           {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 1</h2> */}
//           <form className="space-y-4">
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="name1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="name1"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 value={FormData}
//                  onChange={(e) => handleInputChange(e, setAdminData)}
//                 disabled={!editMode}
                 
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//               Contact Number
//               </label>
//               <input
//                 type="email"
//                 id="email1"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={adminData?.contactno || ''}
//                 onChange={(e) => handleInputChange(e,setAdminData)}
//                 disabled={!editMode}
                
                 
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//              ZIP
//               </label>
//               <input
//                 type="text"
//                 id="zip"
//                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={propertyData?.zip || ''}
//                 onChange={(e) => handleInputChange(e,setPropertyData)}
//                 disabled={!editMode}
                
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//               GST No
//               </label>
//               <input
//                 type="text"
//                 id="gst"
//                className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={propertyData?.gst || ''}
//                 onChange={(e) => handleInputChange(e, "gst", setPropertyData)}
//                 disabled={!editMode}
               
//               />
//             </div>
 
//           </form>
//         </div>

//         {/* Column 2 */}
//         <div className="bg-white p-6">
//           {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 2</h2> */}
//           <form className="space-y-4">
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="name2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="name2"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your name"
//                 value={adminData?.lastname || ''}
//                 onChange={(e) => handleInputChange(e, "lastname", setAdminData)}
//                 disabled={!editMode}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email2">
//                Property Name
//               </label>
//               <input
//                 type="email"
//                 id="email2"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={propertyData?.propertyname || ''}
              
//                 onChange={(e) => handleInputChange(e, "propertyname", setPropertyData)}
//                 disabled={!editMode}
            
//               />
//             </div>

//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//                Property Contact
//               </label>
//               <input
//                 type="text"
//                 id="propcontact"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={propertyData?.propertycontactno || ''}
//                 onChange={(e) => handleInputChange(e, "propertycontact", setPropertyData)}
//                 disabled={!editMode}
//               />
//             </div>

//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//              Owner Image
//               </label>

//             </div>

        

//           </form>
//         </div>

//         {/* Column 3 */}
//         <div className="bg-white p-6">
//           {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 3</h2> */}
          
//           <form className="space-y-4">
            
//             <div>
          
//               <label className="block text-gray-600 mb-1" htmlFor="name3">
//                 E-mail
//               </label>
//               <input
//                 type="text"
//                 id="name3"
//                   className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your name"
//                 value={adminData?.email || ''}
//                 onChange={(e) => handleInputChange(e, "email", setAdminData)}
//                 disabled={!editMode}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//               Property Address
//               </label>
//               <input
//                 type="text"
//                 id="propaddress"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={propertyData?.propertyaddress || ''}
//                 onChange={(e) => handleInputChange(e, "propertyaddress", setPropertyData)}
//                 disabled={!editMode}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//                PAN
//               </label>
//               <input
//                 type="text"
//                 id="zip"
//                 className="w-full border border-gray-500 p-6 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
//                 placeholder="Enter your email"
//                 value={propertyData?.pan || ''}
//                 onChange={(e) => handleInputChange(e, "pan", setPropertyData)}
//                 disabled={!editMode}
             
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1" htmlFor="email1">
//              Property Image
//               </label>
//               <img src={propertyData?.propertyimage || ''}/>
        
//             </div>
            


 
//           </form>

//         </div>
//       </div>
//       <div className="mt-4">
//               {editMode ? (
//                 <button
//                   className="btn btn-success mr-2"
//                   onClick={handleSave}
//                 >
//                   Save
//                 </button>
//               ) : null}
//               <button className="rounded-md" onClick={handleEditToggle} style={{backgroundColor:'#006699',padding:'5px 25px 5px 25px',color:'#fff'}}> 
//                 {editMode ? "Cancel" : "Edit"}
//               </button>
//             </div>
//     </div>
//     </>
//   )
// }

// export default ProfileDetails