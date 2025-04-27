import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear(user)
        navigate('/')
    }
    
    return (
        <div>
            <nav>
           { user ? <ul className="nav-links"> 
            <li><Link to="/add-book">Add book</Link></li>
            <li><Link to="/bookdetails">Book details</Link></li>
            <li><Link to="/">Book list</Link></li>
            <li><Link onClick={(logout)} to="/Register">Logout</Link></li>
            </ul>
            :
            <ul className="nav-links"> 
            <li><Link to="/">Book list</Link></li>
            <li><Link to="/Register">Signup</Link></li>
            <li><Link to="/Login">Login</Link></li>
            </ul>
}

            </nav>
        </div>
    )

}
export default Nav;