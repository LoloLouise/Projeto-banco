import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.scss';
import Home from '../../pages/Home';
import AppNavbar from '../../components/NavBar';
import Partners from '../../pages/Partners';
import AboutUs from '../../pages/AboutUs';
import Contact from '../../pages/Contact';

const MainLayout = () => (
  <Container fluid>
    <Row className='navbar'>
      <Col>
        <AppNavbar />
      </Col>
    </Row>

    <Row className='home' id='home'>
      <Col>
        <Home />
      </Col>
    </Row>

    <Row className='partners' id='partners'>
      <Col>
        <Partners />
      </Col>
    </Row>

    <Row className='aboutus' id='aboutus'>
      <Col>
        <AboutUs />
      </Col>
    </Row>

    <Row className='contact' id='contact'>
      <Col>
        <Contact />
      </Col>
    </Row>
  </Container>
);

export default MainLayout;
