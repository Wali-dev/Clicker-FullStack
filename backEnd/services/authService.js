const authProfile = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

const transporter = require('../configs/emailConfig');

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
                    const token = jwt.sign({ userName: user.userName }, JWT_KEY, { expiresIn: '1d' });
                    return ({ "status": "Success", "message": "Login is Succesfull", "token": token });
                } else {
                    return ({ "status": "Failed", "message": "Email or password does not match" });
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

module.exports.changeUserPassword = async (password) => {
    try {
        if (!password) {
            return ("password is required");
        }
        const salt = await bcrypt.genSalt(7);
        const newHashedPassword = await bcrypt.hash(password, salt);

        //FIMD THE USER
        const userName = req.user.userName;
        console.log(userName);
        const user = await authProfile.findOne({ where: { userName } });
        await user.update({ password: newHashedPassword });
        return ("Password changed");

    } catch (error) {
        return error;

    }

}

module.exports.resetUserPassword = async (userName, token, password) => {
    try {
        if (userName && token && password) {
            const user = await authProfile.findOne({ where: { userName } });
            const new_secret = user.userName + JWT_KEY;
            const isMatch = jwt.verify(token, new_secret);
            if (isMatch) {
                const salt = await bcrypt.genSalt(7);
                const newHashedPassword = await bcrypt.hash(password, salt);
                await user.update({ password: newHashedPassword });

                return ('success');
            }
        }

    } catch (error) {
        return error;

    }
}

module.exports.resetEmailAndPasswordEmailService = async (email) => {
    if (email) {
        const user = await authProfile.findOne({ where: { userName } });
        if (!user) {
            return ("email not found")
        }
        const secret = user._id + JWT_KEY;
        const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '30m' });
        const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`;

        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: user.email,
            subject: "Reset Password",
            html: `Click here to reset password ${link}`
        });
        return info;
    } else {
        return ("email is required")
    }



};