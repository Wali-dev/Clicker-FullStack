const userProfile = require("../models/userModel");
const authProfile = require("../models/authModel");

// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import transporter from '../config/emailConfig.js';

// dotenv.config();
const JWT_KEY = process.env.jwt_key;


module.exports.createUserProfile = async (userName) => {

    try {
        const user = await userProfile.create({ userName });
        return user;
    } catch (error) {
        console.log(error);
    }
};

// module.exports.createEmailPassword = async (email, password, userName, next) => {
//     try {
//         // FIND IF THE EMAIL EXISTS
//         // const user = await authProfile.findOne({ where: { email } });
//         // if (user) {
//         //     // throw new Error("Email already used");
//         //     console.log("email found")

//         // } else {
//         //     console.log("email not found")
//         // }

//         if (userName && email && password) {
//             try {

//                 //CREATE THE SALT TO HASH
//                 const salt = await bcrypt.genSalt(7);
//                 const hashedPassword = await bcrypt.hash(password, salt);
//                 const authDetails = {
//                     userName
//                     email,
//                     password: hashedPassword
//                 }

//                 //CREATE THE USERS AUTH DATABASE
//                 const auth = await authProfile.create({
//                     ...authDetails
//                 });
//                 return auth;

//             } catch (error) {
//                 console.log("failed to create auth");
//             }
//         } else {
//             console.log("userName, email, password all are required");
//         }
//     } catch (error) {
//         // next(error);
//         console.log(error);
//     }
// }

module.exports.getOneProfile = async (userName) => {
    const profile = await userProfile.findOne({ where: { userName } });

    return profile;
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

module.exports.userLogins = async (userName, email, password) => {
    try {
        if (userName && password) {
            //FIND THE USER USING USERNAME
            const user = await userProfile.findOne({ where: { userName } });
            if (user) {


            } else {
                return res("user dosent exists");
            }

        } else {

        }






    } catch (error) {
        return error
    }

}