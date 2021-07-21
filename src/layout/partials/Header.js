import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from 'assets/img/logo.png';

const Header = () => {
  const history = useHistory();

  const logOutHandler = () => history.push('/');

  return (
    <header>
      <Navbar collapseOnSelect variant='dark' bg='info' expand='md'>
        <Navbar.Brand>
          <img src={logo} alt='Logo' width='64' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='top-navbar' />
        <Navbar.Collapse id='top-navbar'>
          <Nav className='ml-auto'>
            <LinkContainer exact to='/dashboard'>
              <Nav.Link active={false}>Dashboard</Nav.Link>
            </LinkContainer>

            <LinkContainer exact to='/tickets'>
              <Nav.Link active={false}>Tickets</Nav.Link>
            </LinkContainer>

            <Nav.Link onClick={logOutHandler}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
