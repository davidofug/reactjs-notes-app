import React from 'react'
import {useParams} from 'react-router-dom'
import Auth from '../config/auth'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const MainNav = () => {

    const {username} = useParams()

    if( Auth.getAuth() )
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container fluid>

                    <Navbar.Brand href="/">CenterX</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/tasks">Tasks</Nav.Link>
                            <Nav.Link href="/notes">Notes</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="My Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href={`users/${username}`}>Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/password">Password</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        )

    return <></>
}

export default MainNav