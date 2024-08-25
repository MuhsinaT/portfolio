import React from 'react'
import './Education.css'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';



function Education() {
  return (
   <>
   
  <div className='Education'> 
    <h1>My Education</h1>




    <Container className='Cards'>
          <Row>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Bachelors in computer science</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Sullamussalam Science College,Areacode</Card.Subtitle>
                  <Card.Text>
                  I achieved 70% in my Bachelor's degree in Computer Science from Calicut University                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Secondary schooling</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">EMEA-HSS Kondotty</Card.Subtitle>
                  <Card.Text>
                  I scored 96% in my secondary board exams in the science stream.                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Schooling</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Bukhari English SCHool</Card.Subtitle>
                  <Card.Text>
                  I scored 86% in my 10th board exams under the CBSE.                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>


    </div>
   
   
   </>
  )
}

export default Education
