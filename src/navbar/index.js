import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const {currentUser} = useSelector((state) => state.users)
    return(
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>FoodAlgorithms</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/search')}>Recipes</Nav.Link>
                        <Nav.Link onClick={() => navigate('/search')}>Cocktails</Nav.Link>
                        <Nav.Link onClick={() => navigate('/blog')}>Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {currentUser ?
                            <>
                                <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link>
                                <Nav.Link disabled={true}>Logged in as {currentUser.username}</Nav.Link>
                            </> :
                            <>
                                <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                                <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
                            </>
                            }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarComponent;