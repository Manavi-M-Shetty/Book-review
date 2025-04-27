import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate();

    const handleClick=async()=>{
        console.warn(name,email,password)
        let result=await fetch('http://localhost:8000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
            'Content-Type':'application/json'
            }
        }
        )
        result=await result.json();
        localStorage.setItem("user",JSON.stringify(result))
        navigate('/')

        console.warn(result);

    }
    
    return (
        <div>
            <ul className="register">
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="input-box" placeholder="Name"></input>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="input-box" placeholder="Email"></input>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} className="input-box" placeholder="Password"></input>
                <button className="button" type="button" onClick={handleClick}>Register</button>
            </ul>
            
        </div>
    )

}
export default Register;