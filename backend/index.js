const express=require('express')
require('./db/config')
const app=express()
const User=require('./db/User')
const Book=require('./db/Book')

const cors = require("cors");
app.use(cors()); 
app.use(express.json());

app.post("/register",async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    result=result.toObject();
    res.send({result})
})


app.post("/login", async(req,res)=>{
    let user=await User.findOne(req.body)
    res.send({user})
})

app.post("/add-book", async(req,res)=>{
    let user = new Book(req.body);
    let result = await user.save();
    result=result.toObject();
    res.send({result})
})








app.listen(8000);


