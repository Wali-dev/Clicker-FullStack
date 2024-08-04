const express = require("express");
const app = express();
const cors = require('cors');
const apiRouter = require("./routes/index.js")
const errorHandler = require("./middleware/error.middleware.js");

app.use(express.json());

app.use(cors());

app.use("/api", apiRouter);


//GLOBAL ERROR HANDLER
app.use(errorHandler);


app.get("/", (req, res) => {
    res.send("this is the home")
})

app.use((req, res) => {
    res.send("there is no such route")
})





module.exports = app;