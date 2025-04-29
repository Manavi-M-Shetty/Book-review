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

    if (user) {
        res.send({ success: true, user });
    } else {
        res.status(401).send({ success: false, message: "Invalid email or password" });
    }
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


app.post("/add-review/:id", async(req,res)=>{
    let book = new Review(req.body);
    let result = await book.save();
    result=result.toObject();
    res.send({result})
})


app.get("/add-review/:id", async(req,res)=>{
    let books=await Book.findOne({ _id: req.params.id });
    res.send(books)
})

app.get("/books/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      const reviews = await Review.find({ book: req.params.id })
      res.send({ book, reviews });
    } catch (err) {
      res.status(500).send({ error: "Failed to fetch book details" });
    }
  });
  


app.listen(8000);


