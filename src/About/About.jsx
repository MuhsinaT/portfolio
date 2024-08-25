import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'
import img from '../assets/muhsina.jpg'

function About() {
    return (
        <>

            <div className='About'>
                <h1>About Me</h1>

                <Row className='row'>

                    <Col md={6}>

                        <p>Highly motivated Front-End Developer with a strong foundation in HTML, CSS,JavaScript and React. Possess
                            a keen understanding of responsive web design principles and user interface best practices. Eager to
                            contribute to a collaborative team environment and leverage my skills to build innovative and usercentric web experiences. Familiar with React.js and actively seeking to expand my knowledge of frontend frameworks.
                        </p>
                    </Col>


                    <Col md={6}>

                        <div className='about-image'>
                            <img src={img} alt="" />
                        </div>
                    </Col>
                </Row>



            </div>




        </>
    )
}

export default About
