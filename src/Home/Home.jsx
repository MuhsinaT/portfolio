import React from 'react'
import './Home.css'
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from React Bootstrap
import  { useState } from 'react';

import Resume from  '../assets/res.png'

function Home() {

  const [show, setShow] = useState(false); // State to manage modal visibility

  const handleClose = () => setShow(false); // Function to close modal
  const handleShow = () => setShow(true); 

  return (
    <>
    <div className="Home">
        <div className="home-content">
            <h1>Muhsina Parveen</h1>
            <h3>Front End Developer</h3>
            <div className="home-button ">
            <Button variant="primary" onClick={handleShow}>
              Resume
            </Button>
                       
          
           <button>Hire me</button>

            </div>
        </div>
    </div>

    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Resume} alt="Resume" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    
    
    </>
  )
}

export default Home
