require('dotenv').config();

config = {
    port: process.env.port,
    database_name: process.env.db_name,
    database_username: process.env.db_username,
    database_password: process.env.db_password, 
    database_host: process.env.db_host
}


module.exports = config;