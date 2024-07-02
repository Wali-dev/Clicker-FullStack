const { createLinkClicks } = require("../services/clickService");


const createlinkClick = async (req, res) => {
    let { userName,
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
        deviceFamily } = req?.body;

    try {
        const click = await createLinkClicks(
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
            deviceFamily);

        res.status(200).send(click);

    } catch (error) {
        console.log(error)
    }
}






module.exports = { createlinkClick }