import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    

    return (
        <div>
            <nav>
            <ul className="header">
            <li><Link to="/">Book list</Link></li>
            <li><Link to="/">Add book</Link></li>
            <li><Link to="/">Book details</Link></li>
            <li><Link to="/">Signup</Link></li>
            <li><Link to="/">Login</Link></li>
            </ul>
            </nav>
            
          
        </div>
    )

}
export default Nav;



