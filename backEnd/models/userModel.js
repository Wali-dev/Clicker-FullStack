const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define(
    'User',
    {
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        // email: {
        //     type: DataTypes.STRING,
        //     unique: true
        // },
        // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        profession_main_catagory: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profession_sub_catagory: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profile_picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        background: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subscribe_button: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        step_completed: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1
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



module.exports = User;
// User.drop();