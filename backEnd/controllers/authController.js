
const { userLogins } = require("../services/authService");


const userLogin = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        if (password && (userName || email)) {
            const token = await userLogins(userName, email, password);
            if (token) {
                res.send({ "status": "Success", "message": "Login is Succesfull", "token": token });
            }
        } else {
            res.send({ "status": "Failed", "message": "password, email or userName is required" });
        }
    } catch (error) {
        res.send(error)
    }
}






module.exports = {
    userLogin
}

