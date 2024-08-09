
const { userLogins, changeUserPassword, resetUserPassword } = require("../services/authService");


const userLogin = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        if (password && (userName || email)) {
            const token = await userLogins(userName, email, password);
            if (token) {
                res.send(token);
            }
        } else {
            res.send({ "status": "Failed", "message": "password, email or userName is required" });
        }
    } catch (error) {
        res.send(error)
    }
}
const changePassword = async (req, res) => {
    const { password } = req.body;
    try {
        if (password) {
            await changeUserPassword(password);
            res.send({ "status": "Success", "message": "Passwords changed succesfully" })
        } else {
            res.send({ "status": "Failed", "message": "Failed to change password" });
        }
    } catch (error) {
        res.send(error)
    }
}

const resetEmailandPasswordEmail = async (req, res) => {

}
const userPasswordReset = async (req, res) => {
    const { userName, token } = req.params;
    const { password } = req.body;
    try {
        const status = await resetUserPassword(userName, token, password);
        res.send({ "status": "Success", "message": "Password reset Successfully", status })

    } catch (error) {
        res.send({ "status": "Failed", "message": "Password reset unsuccessfull" })
    }

}






module.exports = {
    userLogin,
    changePassword,
    resetEmailandPasswordEmail,
    userPasswordReset
}

