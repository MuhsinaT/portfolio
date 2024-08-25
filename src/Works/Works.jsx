import React from 'react'
import './Works.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img11.jpg'
import { Link } from 'react-router-dom';




function Works() {
  return (
   <>

   <div className="Works">
    <h1>Works</h1>


    <Container className='Work'>

    <Row>
        <Col  lg={4} md={6} sm={6} xs={12} className="mb-4" >
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img7} />
          <Card.Body>
            <Card.Title>Food App</Card.Title>
            <Card.Text>
            I have developed the frontend of a food delivery app using React.js. The application includes features such as user sign-in, an add-to-cart functionality, and a search feature..
            </Card.Text>
            <a href="https://food-git-main-muhsinats-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                    View Project
                  </a>
        </Card.Body>
        </Card>
        </Col>
    
    
        <Col lg={4} md={6} sm={6} xs={12} className="mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img8} />
          <Card.Body>
            <Card.Title>Educational App</Card.Title>
            <Card.Text>
            I have developed an educational app React.js. This static app features  information about academic programs, student testimonials, contact details, an 'About' section, and a gallery of the campus.
            </Card.Text>
            <a href="new-edua.vercel.app
" target="_blank" rel="noopener noreferrer" className="card-link">
                    View Project
                  </a>          </Card.Body>
        </Card>
        </Col>
    
    
        <Col lg={4} md={6} sm={6} xs={12}className="mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img9} />
          <Card.Body>
            <Card.Title>Makeup Store</Card.Title>
            <Card.Text>
            I have developed a makeup store using HTML, CSS, and JavaScript. The main functionality of the site involves fetching essential product details from a makeup products API.
            </Card.Text>
            <a href="new-edua.vercel.app
" target="_blank" rel="noopener noreferrer" className="card-link">
                    View Project
                  </a>  
            
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Col>
    
        <Col lg={4} md={6} sm={6} xs={12}className="mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img11} />
          <Card.Body>
            <Card.Title>Todo List APP</Card.Title>
            <Card.Text>
            I created a todo app using HTML, CSS, and JavaScript. The app allows users to add, delete, and update tasks, making task management easier and more efficient.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Col>


        <Col lg={4} md={6} sm={6} xs={12} className="mb-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img10} />
          <Card.Body>
            <Card.Title>Simple interest Calculator</Card.Title>
            <Card.Text>
            I developed a simple interest calculator that computes interest based on annual income. It helps users quickly determine interest amounts.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        </Col>
    </Row>

    </Container>



    
   </div>
   
   
   
   
   </>
  )
}

export default Works
