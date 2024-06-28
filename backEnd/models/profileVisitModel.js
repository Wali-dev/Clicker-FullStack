const sequelize = require('../configs/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const ProfileVisit = sequelize.define(
    'ProfileVisit',
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        visiting_time_date: {
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
        visit_duration: {
            type: DataTypes.STRING(20),
            allowNull: true,
            
        },

    },
    {
        timestamps: false,
        noPrimaryKey: true,

    }
);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Model is created successfully!")
    })
    .catch((err) => {
        console.log(err)
    })

// ProfileVisit.drop();