const clickModel = require("../models/clickModel");

module.exports.getSingleLinkClicks = async (userName, link_id) => {
    try {
        const clicks = await clickModel.findAll({ where: { userName, link_id } });
        return clicks;
    } catch (error) {
        console.log(error)
    }
}
module.exports.getUserallLinkClicks = async (userName) => {
    try {
        const links = await clickModel.findAll({ where: { userName } });
        return links;
    } catch (error) {
        console.log(error)
    }
}


module.exports.createLinkClicks = async (userName,
    link_id,
    ipAddress,
    countryCode,
    countryName,
    languages,
    region,
    city,
    browser,
    deviceBrand,
    deviceModel,
    deviceFamily) => {
    try {
        const click = await clickModel.create({
            userName,
            link_id,
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

        return click;
        // console.log(click);
    } catch (error) {
        console.log(error)
    }
}

