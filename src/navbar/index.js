import React from "react";
import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/home"} >FoodAlgorithms</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/search'}>Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Cocktails</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Profile
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="#">Login</Link></li>
                                <li><Link className="dropdown-item" href="#">Register</Link></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;