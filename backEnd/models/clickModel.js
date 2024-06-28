const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Click = sequelize.define(
    'Click',
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        click_date_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        device: {
            type: DataTypes.STRING(20),
            allowNull: false,
            
        },

    },
    {
        timestamps: false,
        noPrimaryKey: true

    }
);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Model is created successfully!")
    })
    .catch((err) => {
        console.log(err)
    })

// Click.drop();