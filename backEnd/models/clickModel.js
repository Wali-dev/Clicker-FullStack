const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Click = sequelize.define(
    'Click',
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ipAddress: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        countryCode: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        countryName: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },

        region: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        city: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        browser: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        deviceBrand: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        deviceModel: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },
        deviceFamily: {
            type: DataTypes.STRING(20),
            allowNull: true,

        },

    },
    {
        timestamps: true,
        updatedAt: false,
        noPrimaryKey: true
    }
);

// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Model is created successfully!")
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Click.drop();
module.exports = Click;