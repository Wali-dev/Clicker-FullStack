const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define(
    'User',
    {

        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
            allowNull: false,
        },
        step_completed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1

        },
        step_completed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1

        }
    },
    {

    }
);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Model is created successfully!")
    })
    .catch((err) => {
        console.log(err)
    })

// User.drop();