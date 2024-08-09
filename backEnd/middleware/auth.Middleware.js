const authProfile = require("../models/authModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_KEY = process.env.jwt_key;

const checkUserAuth = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
        try {
            //GET TOKEN FROM THE HEADER
            token = authorization.split(' ')[1];

            //VERIFY TOKEN
            const { userName } = jwt.verify(token, JWT_KEY);

            //GET USER BY TOKEN
            const user = await userProfile.findOne({ where: { userName } });
            res.send(user);
            next();
        } catch (error) {
            console.log(error);
            res.status(401).send({ "status": "failed", "message": "Unauth user" })
        }
    }
    if (!token) {
        res.send({ "status": "failed", "message": "Token is required" })
    }
}

module.exports = checkUserAuth;
