
const {  userLogins } = require("../services/userService");



const userLogin = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        if (password && userName || email) {
            const token = await userLogins(userName, email, password);
            if (token) {
                res.send({ "status": "Success", "message": "Login is Succesfull", "token": token });
            }
        } else {
            res({ "status": "Failed", "message": "password, email or userName is required", "token": token })
        }

    } catch (error) {
        console.log(error)

    }


}






module.exports = {
    getAllUser,
    createUser,
    updateEmailPassword,
    updateUser,
    userLogin
}

