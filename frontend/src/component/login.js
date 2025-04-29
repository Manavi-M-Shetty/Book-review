import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate();

    const handleClick = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:8000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (result.status === 200) {  // login success
            result = await result.json();
            console.warn(result);
            localStorage.setItem("user", JSON.stringify(result.user)); // store only user
            navigate('/');
        } else { // login failed
            alert('User not found'); // show error to user
        }
    };
    
    return (
        <div>
            <ul className="register">
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="input-box" placeholder="Email"></input>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} className="input-box" placeholder="Password"></input>
                <button className="button" type="button" onClick={handleClick}>Login</button>
            </ul>
            
        </div>
    )

}



export default Login;