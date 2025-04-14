import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    
    return (
        <div>
            <nav>
            <ul className="nav-links">
            <li><Link to="/">Book list</Link></li>
            <li><Link to="/add-book">Add book</Link></li>
            <li><Link to="/bookdetails">Book details</Link></li>
            <li><Link to="/Register">Signup</Link></li>
            <li><Link to="/Login">Login</Link></li>
            </ul>
            </nav>
        </div>
    )

}
export default Nav;



