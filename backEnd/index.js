const app = require("./app");
const configs = require("./configs/config")
const port = configs.port;


require("./configs/sequelize")


app.listen(port, ()=>{
    console.log(`The server is running on http://localhost:${port}`)
})