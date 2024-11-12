import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios"; // Import axios for API requests
import Sidebar from "./Sidebar";
import Header from "./Header";

import './Dashboard.css'

function Users() {
  const [addusermodal, setAddUserModal] = useState(false);
  const [users, setUsers] = useState([]); // State to store the users fetched from the API
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');

  const get_actual='http://192.168.1.8:8080/users/getAllUsers'
  const post_actual='http://192.168.1.8:8080/users/adduser'
  const get_mock='http://localhost:3002/users'
  const post_mock='http://localhost:3002/users'

const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
    
  // Fetch users from API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(get_actual);
        setUsers(response.data); // Assuming response.data contains an array of users
        alert("User Fetched Successfully")
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("An Error Occured.")
      }
    }
    fetchUsers();
  }, []);

//  ;

// useEffect(() => {
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://192.168.1.8:8080/users/getAllUsers');
//       setUsers(response.data); // Assuming response.data contains an array of users
//       console.log("Users fetched successfully");
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       alert("An error occurred while fetching users.");
//     }
//   };

//   fetchUsers();
// }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the form from reloading the page
    
    const userData = {
      admin_id: 1, // assuming this is constant for now
      user_name: username,
      email_id: email,
      password: password,
      phone_no: phoneno,
      address: address
    };

    try {
      const response = await axios.post(post_actual, userData);
      console.log("User added successfully:", response.data);
      fetchUsers(); // Refresh the user list after adding a new user

      // Clear form fields after successful submission
      setUserName('');
      setEmail('');
      setPassword('');
      setPhoneNo('');
      setAddress('');
      setAddUserModal(false); // Close the modal after submission
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
  
   
    <div className="dashandside">
       <div className="grid-container">
       <Header OpenSidebar={OpenSidebar} />
       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="dashboardpage" style={{ display: 'flex' }}>
        
        <main style={{backgroundColor:'#F5F5F5',width:'1000px'}}>
          <div className="dashboard-wrapper">
            <div className="container mt-4">
              <div className="d-flex justify-content-end">
              <button 
                onClick={handleOpen}
                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                Add New User
              </button>

            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Sign In</DialogHeader>
              <DialogBody>
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Email
                  </label>
                  <input type="email" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                </div>
                
                <div className="w-full max-w-sm min-w-[200px]">
                  <label className="block mb-2 text-sm text-slate-600">
                    Password
                  </label>
                  <input type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
                </div>

                <div className="inline-flex items-center mt-2">
                  <label className="flex items-center cursor-pointer relative" htmlFor="check-2">
                    <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check-2" />
                    <span className="absolute text-white opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">
                    Remember Me
                  </label>
                </div>
              </DialogBody>
              <DialogFooter>
                <button onClick={handleOpen} className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none">
                  Sign In
                </button>
              </DialogFooter>
            </Dialog>
              </div>

              <div className="table-container">
                <table className="table table-bordered table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th>User ID</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={index}>
                          <td>{user.id}</td>
                          <td>{user.user_name}</td>
                          <td>{user.email_id}</td>
                          <td>{user.phone_no}</td>
                          <td>{user.address}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">No users found</td>
                      </tr>
                    )} */}

              {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={index}>
                          <td>{user.id}</td>
                          <td>{user.user_name}</td>
                          <td>{user.email_id}</td>
                          <td>{user.phone_no}</td>
                          <td>{user.address}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">No users found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Add User Modal */}
              <Modal show={addusermodal} onHide={() => setAddUserModal(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter user name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhoneNo">
                      <Form.Label>Phone No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneno}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formAddress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Button type="submit" className="btn btn-primary mt-3">Submit</Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setAddUserModal(false)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </main>
        </div>
      </div>
      </div>
    </>
  );
}
export default Users;