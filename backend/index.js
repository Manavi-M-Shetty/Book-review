const express=require('express')
require('./db/config')
const app=express()


const User=require('./db/User')
const Book=require('./db/Book')
const Review=require('./db/Review')


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


app.get("/books", async(req,res)=>{
    let books=await Book.find();
    res.send(books)
})


app.post("/add-book/:id", async(req,res)=>{
    let book = new Review(req.body);
    let result = await book.save();
    result=result.toObject();
    res.send({result})
})


app.get("/add-review/:id", async(req,res)=>{
    let books=await Book.findOne({ _id: req.params.id });
    res.send({books})
})


app.listen(8000);


