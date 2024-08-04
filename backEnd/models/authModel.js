const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Auth = sequelize.define(
    'Auth',
    {
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }
);

// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Model is created successfully!")
//     })
//     .catch((err) => {
//         console.log(err)
//     })



module.exports = Auth;
// User.drop();