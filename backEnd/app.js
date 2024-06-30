const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");
const linksRoute = require("./routes/linkRoute");


app.use(express.json());


app.use(userRoute);
app.use(linksRoute);





app.get("/", (req, res)=>{
    res.send("this is the home")
})






app.use((req, res)=>{
    res.send("there is no such route")
})





module.exports = app;