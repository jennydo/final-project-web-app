import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {

    return(
        // <nav className="navbar navbar-expand-lg bg-light">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to={"/home"} >FoodAlgorithms</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                 data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        //                 aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to={'/search'}>Recipes</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/search">Cocktails</Link>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        //                        aria-expanded="false">
        //                         Profile
        //                     </Link>
        //                     <ul className="dropdown-menu">
        //                         <li><Link className="dropdown-item" href="#">Login</Link></li>
        //                         <li><Link className="dropdown-item" href="#">Register</Link></li>
        //                     </ul>
        //                 </li>
        //
        //
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">FoodAlgorithms</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={'/search'}>Recipes</Nav.Link>
                        <Nav.Link href={'/search'}>Cocktails</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={'/login'}>Login</Nav.Link>
                        <Nav.Link href={'/register'}>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavbarComponent;