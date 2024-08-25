import React from 'react'
import './Contact.css'
import { Container, Row ,Col} from 'react-bootstrap'

function Contact() {
  return (
    <>
    <div className='Contact'>
        <h1>Contact Me</h1>

        <Container>
            <Row>

                <Col lg={6} md={6}  className='contact-box'>
                <h2>Contact</h2>
                <div className='contact-content'>
                    <h4><i className="fa-solid fa-location-dot" />Malappuram, Kerala</h4>
    
                    <h4><i className="fa-solid fa-envelope" />muhsinamuhsina703@gmail.com</h4>
    
                    <h4><i className="fa-solid fa-phone" />9207636083</h4>
    
                    <h4><i className="fa-brands fa-instagram" />muhsina703</h4>
                    <h4><i className="fa-solid fa-mobile" />+0483 271134</h4>
                </div>
                </Col>

                <Col lg={6} md={6} className='Contact-form'>

                <h2>Get In Touch </h2>
                <div className="form-box">
                    <input type="text" placeholder='Name'/>
                    <input type="email"  placeholder='Email'/>
                    <input type="text"  placeholder='Subject'/>
                    <input type="text" placeholder='Message'  />

                    <button>Submit</button>
                </div>
                </Col>
            </Row>

        </Container>
        
        
        
        </div>
    
    
    </>
  )
}

export default Contact
