import React from "react";
import { useState } from "react";

const Addbook = () => {
    const[title,setTile]=useState("")
    const[author,setAuthor]=useState("")
    const[description,setDescription]=useState("")

    const handleClick=async()=>{
        console.warn(title,author,description)
        let result=await fetch('http://localhost:8000/add-book',{
            method:'post',
            body:JSON.stringify({title,author,description}),
            headers:{
            'Content-Type':'application/json'
            }
        }
        )
        result=await result.json();
        console.warn(result);

    }
    
    return (
        <div>
            <ul className="register">
                <input type="text" onChange={(e)=>setTile(e.target.value)} value={title} className="input-box" placeholder="Title"></input>
                <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author} className="input-box" placeholder="Author"></input>
                <textarea row={4} type="text" onChange={(e)=>setDescription(e.target.value)} value={description} className="input-box" placeholder="Description"></textarea>
                <button className="button" type="button" onClick={handleClick}>Add book</button>
            </ul>
            
        </div>
    )

}
export default Addbook;