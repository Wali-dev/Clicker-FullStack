const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute")


app.use(express.json());


app.use(userRoute);





app.get("/", (req, res)=>{
    res.send("this is the home")
})






app.use((req, res)=>{
    res.send("there is no such route")
})





module.exports = app;