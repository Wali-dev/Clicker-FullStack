
const { createUserProfile, createEmailPassword, updateUserProfile, getOneProfile } = require("../services/userService");


const getAllUser = (req, res) => {
    res.send("this is the all route")
}
const getOneUser = async (req, res) => {
    const { userName } = req.query;
    try {
        const user = await getOneProfile(userName);
        res.status(200).send(user);
    } catch (error) {
        return error;

    }

}

const createUser = async (req, res) => {
    let { userName } = req.query;
    try {
        const user = await createUserProfile(userName);
        if (user) {
            res.send(user);
            // console.log(user)
        }
        else {
            res.status(500);
        }
    } catch (error) {
        console.log(error)
    }
}
const updateEmailPassword = async (req, res) => {
    let { userName } = req.query;
    let { email, password } = req.body;
    try {
        const user = await createEmailPassword(userName, email, password);
        res.send(user);
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    const { userName } = req.query;

    let { profession_main_catagory,
        profession_sub_catagory,
        profile_picture,
        background,
        subscribe_button,
        theme,
        step_completed } = req?.body;

    try {
        const user = await updateUserProfile(
            userName,
            profession_main_catagory,
            profession_sub_catagory,
            profile_picture,
            background,
            subscribe_button,
            theme,
            step_completed)

        res.status(200).send(user)

    } catch (error) {
        console.log(error)
    }
}







module.exports = {
    getAllUser,
    createUser,
    updateEmailPassword,
    updateUser,
    getOneUser
}

