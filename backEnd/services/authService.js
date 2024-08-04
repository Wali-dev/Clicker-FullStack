const authProfile = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();
const JWT_KEY = process.env.jwt_key;

module.exports.userLogins = async (userName, email, password) => {
    try {
        if (userName && password) {

            //FIND THE USER USING USERNAME
            const user = await authProfile.findOne({ where: { userName } });
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {

                    //GENERATE JWT TOKEN
                    const token = jwt.sign({ userID: user._id }, JWT_KEY, { expiresIn: '1d' });
                    return token;
                } else {
                    return ("Email or password does not match");
                }
            } else {
                return ("User doesn't exists");
            }
        } else {

            //FIND THE USER USING EMALI
            const user = await authProfile.findOne({ where: { email } });
            if (user) {
                if (user) {
                    const isMatch = await bcrypt.compare(password, user.password);
                    if (isMatch) {

                        //GENERATE JWT TOKEN
                        const token = jwt.sign({ userID: user._id }, JWT_KEY, { expiresIn: '1d' });
                        return token;
                    } else {
                        return ("Email or password does not match");
                    }
                } else {
                    return ("User doesn't exists");
                }
            }
        }
    } catch (error) {
        return error
    }

}