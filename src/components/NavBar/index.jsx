import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.svg';
import './styles.scss';

const AppNavbar = () => (
  <Navbar expand='md' className='appNavbar'>
    <Navbar.Brand href='/#home'>
      <img src={Logo} className='logo' alt='' />
      <strong>Projeto Elo</strong>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className='me-auto'>
        <Nav.Link href='/#partners'>Parcerias</Nav.Link>
        <Nav.Link href='/#aboutus'>Sobre Nós</Nav.Link>
        <Nav.Link href='/#contact'>Contato</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNavbar;
