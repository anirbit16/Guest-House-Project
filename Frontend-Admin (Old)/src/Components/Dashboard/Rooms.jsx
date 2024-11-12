import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Modal,Form} from 'react-bootstrap'
 

const Rooms = () => {
  const[addnewroommodal,setAddNewRoomModal]=useState(false)
  const [roomno,setRoomNo] = useState('');
  const [roomtype,setRoomType]=useState('');
 
  
  const handleSubmit = ()=>{
    useState()
  }
  return (
    <>
    <div className="button">
      <button className='button btn btn-primary'>Add New Room</button>
    </div>
    
    <div className="roomscontainer" style={{display:'inline-block'}}>
    <button className="btn btn-success">1</button>
    <button className="btn btn-danger">2</button>
    <button className="btn btn-danger">3</button>
    <button className="btn btn-danger">4</button>
    <button className="btn btn-danger">5</button>
    <button className="btn btn-danger">6</button>
    <button className="btn btn-danger">7</button>
    <button className="btn btn-danger">8</button>
    <button className="btn btn-danger">9</button>
    <button className="btn btn-danger">10</button>
    <button className="btn btn-danger">12</button>
    <button className="btn btn-danger">13</button>
    <button className="btn btn-danger">14</button>
    <button className="btn btn-warning">15</button>
    <button className="btn btn-warning">16</button>
    <Modal show={addnewroommodal} onHide={() => setAddNewRoomModal(false)} centered>
        <Modal.Header closeButton>
                     <Modal.Title>Add New Room</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <Form onSubmit={handleSubmit}>
                         <Form.Group controlId="formRoomNumber">
                             <Form.Label>Room Number</Form.Label>
                             <Form.Control 
                                type="text" 
                                placeholder="Enter Room No." 
                                value={roomno} // Link to state
                                onChange={(e) => setRoomNo(e.target.value)} // Update state on change
                                required 
                            />
                        </Form.Group>

                        <Form.Group controlId="formRoomType">
                            <Form.Label>Room Type</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter description" 
                                value={description} // Link to state
                                onChange={(e) =>setRoomType(e.target.value)} // Update state on change
                                required 
                            />
                        </Form.Group>

                         
 

                      
                         

                        <Button variant="primary" type="submit" className="mt-2">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

      
    </div>

    </>
  )
}

export default Rooms;
