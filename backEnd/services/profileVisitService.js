const profileVisitModel = require("../models/profileVisitModel");

module.exports.getUsersTotalProfileVisit = async (userName) => {
    try {
        const visits = await profileVisitModel.findAll({ where: { userName } });
        return visits;
    } catch (error) {
        console.log(error)
    }
}

module.exports.createProfileClicks = async (userName,
    id,
    ipAddress,
    countryCode,
    countryName,
    region,
    city,
    browser,
    deviceBrand,
    deviceModel,
    deviceFamily) => {
    try {
        const visit = await profileVisitModel.create({
            id,
            userName,
            ipAddress,
            countryCode,
            countryName,
            region,
            city,
            browser,
            deviceBrand,
            deviceModel,
            deviceFamily
        });

        return visit;
        // console.log(click);
    } catch (error) {
        console.log(error)
    }
}

