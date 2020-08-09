import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl } from '../BootstrapWrap';
import OutlineButton from '../Button/OutlineButton';

import './navbar.css';

const NavbarWrap = ({ setIsAuthenticated }) => {
  return <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto" id="Navbar">
        {/* <Nav.Link href="#home" onClick={() => setCurrentPage(1)}>Home</Nav.Link>
        <Nav.Link href="#course" onClick={() => setCurrentPage(2)}>Courses</Nav.Link>
        <Nav.Link href="#student" onClick={() => setCurrentPage(3)}>Students</Nav.Link> */}

        <Link to="/">Home</Link>
        <Link to="/course">Course</Link>
        <Link to="/student">Student</Link>

      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <OutlineButton variant="outline-light" text="Search" />
      </Form>
      <Nav.Link href="/" style={{ "color": "white" }} onClick={() => setIsAuthenticated(false)}>Logout</Nav.Link>
    </Navbar>
  </>
}

export default NavbarWrap;