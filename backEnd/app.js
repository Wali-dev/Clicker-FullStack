const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.send("this is the home")
})

app.use((req, res)=>{
    res.send("there is no such route")
})





module.exports = app;