const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Link = sequelize.define(
    'Link',
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actual_link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link_title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link_id: {
            type: DataTypes.STRING,
            allowNull: true,
            primaryKey: true
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        lock: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        layout: {
            type: DataTypes.STRING(15),
            defaultValue: "classic",
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        archived: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        time_of_live: {
            type: DataTypes.STRING(10),
            allowNull: true,

        },
    },
    {

    }
);

// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Model is created successfully!")
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Link.drop();
module.exports = Link;