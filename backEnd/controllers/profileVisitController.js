const { createProfileClicks, getUsersTotalProfileVisit } = require("../services/profileVisitService");



const createProfileVisitClick = async (req, res) => {
    let { userName,
        id,
        ipAddress,
        countryCode,
        countryName,
        region,
        city,
        browser,
        deviceBrand,
        deviceModel,
        deviceFamily } = req?.body;

    try {
        const click = await createProfileClicks(
            userName,
            id,
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

const getUserAllProfileClicks = async (req, res) => {

    let { userName } = req.query;
    try {

        const profileClicks = await getUsersTotalProfileVisit(userName);

        res.status(200).send(profileClicks);
    } catch (error) {
        console.log(error)
    }
}




module.exports = { createProfileVisitClick, getUserAllProfileClicks }