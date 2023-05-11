import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const NavBar = () => {
  return (
    <React.Fragment>
        <Navbar className="yellotail">
          
            <LinkContainer to={'/'}>
            <Navbar.Brand>Navbar </Navbar.Brand>
            </LinkContainer>
        </Navbar>
        <Nav>
            <Nav.Item>
                <LinkContainer to={'/'}>
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={'/news/new'}>
                <Nav.Link>New news</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={'/contact'}>
                <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    </React.Fragment>
  )
}

export default NavBar