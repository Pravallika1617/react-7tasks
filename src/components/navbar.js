import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import "./navbar.css"


const Navbar1 = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='primary-navbar p-4'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/list'>Todolist</NavLink>
            <NavLink to='/calculator'>Calculator</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/utils'>Converter</NavLink>
            <NavLink to='/quiz'>Quiz</NavLink>

            <div className='navbar-buttons'>
                <NavLink to='/'><button>Login</button></NavLink>
                <NavLink to='/signup'><button>SignUp</button></NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;

