import React,{useState} from 'react'
import {useNavigate,useLocation } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const ProfileDetails = () => {
    // propertyname, propertyaddress, 
    // propertycontactno, zip, rooms, 
    // subplan, taxes, ownername, 
    // ownercontact,  gst, pan,
    // ownerimage, propertyimage, duration,
    // checkin,checkout 
    const location = useLocation();
    const navigate = useNavigate();
    
    const[propertyname] = useState(location.state.propertyname)
    const [propertyaddress] = useState(location.state.propertyaddress)
    const [propertycontactno] = useState(location.state.propertycontactno)
    const [zip] = useState(location.state.zip)
    const [rooms ]= useState(location.state.rooms)
    const [subplan] = useState(location.state.subplan)
    const [taxes] = useState(location.state.taxes)
    const [ownername] = useState(location.state.ownername)
    const [ownercontact] = useState(location.state.ownercontact)
    const [email] = useState(location.state.email)
    const [gst] = useState(location.state.gst)
    const [pan] = useState(location.state.pan)
    const [ownerimage] = useState(location.state.ownerimage)
    const [propertyimage] = useState(location.state.propertyimage)
    const[ duration] = useState(location.state.duration)
    const [checkin] = useState(location.state.checkin)
    const [checkout] = useState(location.state.checkout)
 
    
    const handleClick=()=>{
      console.log(propertyname)
    }
 


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
                Owner Name
              </label>
              <input
                type="text"
                id="name1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={ownername}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              Property Contact
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={propertycontactno}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Rooms
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={rooms}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              GST No
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={gst}
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
                E-mail
              </label>
              <input
                type="text"
                id="name2"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                value={{email}}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email2">
               Property Address
              </label>
              <input
                type="email"
                id="email2"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={propertyaddress}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              Subscription Plan
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={subplan}

              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Owner Image
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={ownerimage}
              />
            </div>

            <div style={{display:'flex',justifyContent:'center'}}>
               <button className='btn btn-primary' style={{backgroundColor:'#006699',padding:'5px 40px 5px 40px' ,borderRadius:'5px',color:'#fff'}}>Edit</button>
            </div>


          </form>
        </div>

        {/* Column 3 */}
        <div className="bg-white p-6">
          {/* <h2 className="text-xl font-semibold mb-4 text-center">Form 3</h2> */}
          
          <form className="space-y-4">
            
            <div>
          
              <label className="block text-gray-600 mb-1" htmlFor="name3">
                Property Name
              </label>
              <input
                type="text"
                id="name3"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                value={propertyname}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email3">
               Zip Code
              </label>
              <input
                type="email"
                id="email3"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={zip}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
              PAN No
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={pan}
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email1">
             Property Image
              </label>
              <input
                type="email"
                id="email1"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                value={propertyimage}
              />
            </div>



 
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileDetails
