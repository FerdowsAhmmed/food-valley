import React from 'react';
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <Container className='footer hidden'>
          <Row>
            <Col className='bg-info'>
            <p>Footer Left</p>
            <p>Footer Left</p>
            <p>Footer Left</p>
            <p>Footer Left</p></Col>
            <Col className='bg-danger' md="auto">
            <p>Footer Middle</p>
            <p>Footer Middle</p>
            <p>Footer Middle</p>
            <p>Footer Middle</p></Col>
            <Col className='bg-success' xs lg="2">
             <p>Footer Right</p>
             <p>Footer Right</p>
             <p>Footer Right</p>
             <p>Footer Right</p>
            </Col>
          </Row>
        </Container>
      );
    }

export default Footer;