const { getUserallLinks, createUserLink, updateUserLink } = require("../services/linkService");


const getUserlinks = async (req, res) => {

    let { userName } = req.query;

    try {
        const links = await getUserallLinks(userName);
        res.status(200).send(links);
    } catch (error) {
        console.log(error)

    }
}


const createLink = async (req, res) => {
    let { userName, link_id } = req.query;

    try {
        const link = await createUserLink(userName, link_id);
        res.status(200).send(link);
    } catch (error) {
        console.log(error)

    }
}

const updateLink = async (req, res) => {
    let { userName, link_id } = req.query;
    let {
        actual_link,
        link_title,

        thumbnail,
        active,
        lock,
        layout,
        deleted,
        archived,
        time_of_live } = req?.body;
    try {
        const links = await updateUserLink(userName,
            actual_link,
            link_title,
            link_id,
            thumbnail,
            active,
            lock,
            layout,
            deleted,
            archived,
            time_of_live);

        res.status(200).send(links);
    } catch (error) {
        console.log(error)

    }
}

module.exports = { getUserlinks, updateLink, createLink }