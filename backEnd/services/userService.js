
const userProfile = require("../models/userModel");


module.exports.createUserProfile = async (userName) => {

    try {
        const user = await userProfile.create({ userName });
        return user;
    } catch (error) {
        console.log(error);
    }
};

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