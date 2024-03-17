const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const cors = require("cors");

require('dotenv').config();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Hii this is home page of grocery");
    return res.json("hello..")
})

// if you want to navigate to another module...

app.get("/home", (req, res) => {
    return res.json("Grocery delivery apps are trending among people and it won’t be wrong to say that the on-demand grocery industry will continue to grow. The benefits and ease grocery shopping apps offer to customers, who don’t want to go out to local stores and do the shopping themselves, is what makes it a hot trend in 2020.");
    return res.json("hello..")
})

// about
app.get("/about", (req, res) => {
    return res.json("Hii this is about page of grocery");
    return res.json("hello..")
})

//contact
app.get("/contact", (req, res) => {
    return res.json("Hii this is contact page of grocery");
    return res.json("hello..")
})

//cart view
app.get("/cart", (req, res) => {
    return res.json("Hii this is cart page of grocery");
    return res.json("hello..")
})

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
})

mongoose.connection
    .once("open", () => {
        console.log("MongoDB is Connected Succesfully");
    }).on("error", (error) => {
        console.log(`Error : ${error}`);
    })

app.listen(4000, () => {
    console.log("Server Is Working on Port 4000");
    
})


