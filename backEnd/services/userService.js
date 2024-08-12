const userProfile = require("../models/userModel");
const authProfile = require("../models/authModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// import transporter from '../config/emailConfig.js';

dotenv.config();
const JWT_KEY = process.env.jwt_key;


module.exports.createUserProfile = async (userName) => {

    try {
        const user = await userProfile.create({ userName });
        return ({ "status": "Success", "message": "User created succesfully", "user": user });
    } catch (error) {
        return ({ "status": "Failed", "message": error.errors[0].message });
    }
};

module.exports.createEmailPassword = async (userName, email, password) => {
    try {
        if (email && userName && password) {

            // CHECKING IF EMAIL EXISTS ON THE DATABASE
            const user = await authProfile.findOne({ where: { email } });
            if (user) {
                return ({ "status": "Failed", "message": "email already exists" });

            } else {
                // CREATE THE SALT TO HASH
                const salt = await bcrypt.genSalt(7);
                const hashedPassword = await bcrypt.hash(password, salt);
                const authDetails = {
                    userName,
                    email,
                    password: hashedPassword
                }

                //CREATE THE TOKEN FOR USER EMAIL SETUP
                const token = jwt.sign({ userName }, JWT_KEY, { expiresIn: '30m' })

                //CREATE THE USERS AUTH DATABASE
                const auth = await authProfile.create({
                    ...authDetails
                });
                return ({ "status": "Success", "message": "email and password created succesfully", "auth": auth, "token": token });
            }
        }
        else {
            return ("userName, email, password all are required");
        }
    } catch (error) {
        return ("failed to create auth");
    }
}

module.exports.getOneProfile = async (userName) => {
    try {
        const profile = await userProfile.findOne({ where: { userName } });
        if (profile) {
            return profile;
        } else {
            return ("user not found");
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports.updateUserProfile = async (
    userName,
    profession_main_catagory,
    profession_sub_catagory,
    profile_picture,
    background,
    subscribe_button,
    theme,
    step_completed) => {

    try {

        const profile = await this.getOneProfile(userName);

        const userDetails = {
            profession_main_catagory,
            profession_sub_catagory,
            profile_picture,
            background,
            subscribe_button,
            theme,
            step_completed
        }

        //update the user database
        const updateUser = await profile.update({
            ...userDetails
        });

        return updateUser;
    } catch (error) {
        console.log(error);
    }
};

