import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
        <Navbar.Brand>
          <img src={logo} alt='Logo' width='64' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='top-navbar' />
        <Navbar.Collapse id='top-navbar'>
          <Nav className='ml-auto'>
            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='#link'>Tickets</Nav.Link>
            <Nav.Link href='#link'>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
