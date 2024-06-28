const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Link = sequelize.define(
    'Link',
    {

        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actual_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        lock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        layout: {
            type: DataTypes.STRING,
            defaultValue: "classic",
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        archived: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        time_of_live: {
            type: DataTypes.STRING(10),
            allowNull: true,

        },
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

// Link.drop();