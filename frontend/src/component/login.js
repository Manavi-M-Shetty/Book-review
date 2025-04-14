import React from "react";
import { useState } from "react";

const Login = () => {
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleClick=async()=>{
        console.warn(email,password)
        let result=await fetch('http://localhost:8000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
            'Content-Type':'application/json'
            }
        }
        )
        result=await result.json();
        localStorage.setItem("user",JSON.stringify(result))
        console.warn(result);

    }
    
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