
const { createUserProfile, updateUserProfile } = require("../services/userService");



const getAllUser = (req, res) => {
    res.send("this is the all route")
}

const createUser = async (req, res) => {
    let { userName } = req.params;

    try {
        const user = await createUserProfile(userName);
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    const { userName } = req.params;

    let { profession_main_catagory,
        profession_sub_catagory,
        profile_picture,
        background,
        subscribe_button,
        theme,
        step_completed} = req?.body;

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
    updateUser
}