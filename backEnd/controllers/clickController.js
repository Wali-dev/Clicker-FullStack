const { createLinkClicks, getSingleLinkClicks, getUserallLinkClicks } = require("../services/clickService");


const createlinkClick = async (req, res) => {
    let { userName,
        link_id,
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

const getsingleLinkClick = async (req, res) => {

    let { userName, link_id } = req.query;
    try {

        const linkClicks = await getSingleLinkClicks(userName, link_id)

        res.status(200).send(linkClicks)
    } catch (error) {
        console.log(error)
    }
}

const getUserAllLinkClicks = async (req, res) => {

    let { userName } = req.query;
    try {

        const linkClicks = await getUserallLinkClicks(userName);

        res.status(200).send(linkClicks)
    } catch (error) {
        console.log(error)
    }
}





module.exports = { createlinkClick, getsingleLinkClick, getUserAllLinkClicks }