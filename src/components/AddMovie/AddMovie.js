import React,{useState} from 'react'
import {Button,Modal,Form} from 'react-bootstrap'
import movie5 from '../../image/godfather.jpg'




function ModalAddMovie({AddMovie}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const [title, setTitle] = useState("")
    const [rating, setRate] = useState(0)
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Label>title</Form.Label>
            <Form.Control type="text" placeholder="Enter title movie" onChange={(e)=>setTitle(e.target.value)}/>
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" min="1" max="5" placeholder="Enter rating" onChange={(e)=>setRate(e.target.value)}/>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{AddMovie({id:Math.random(),title,rating,img:movie5})}}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalAddMovie