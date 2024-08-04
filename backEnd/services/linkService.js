const linkModel = require("../models/linkModel");

module.exports.getUserallLinks = async (userName) => {
    try {
        const links = await linkModel.findAll({ where: { userName } });
        return links;
    } catch (error) {
        console.log(error)
    }
}

module.exports.getOneLink = async (link_id) => {

    try {
        const link = await linkModel.findOne({ where: { link_id } });
        return link;

    } catch (error) {
        console.log(error)
    }
}

module.exports.createUserLink = async (userName, link_id, actual_link) => {

    try {
        const link = await linkModel.create({ userName, link_id, actual_link });
        return link;
    } catch (error) {
        console.log(error)
    }
}



module.exports.updateUserLink = async (
    userName,
    actual_link,
    link_title,
    link_id,
    thumbnail,
    active,
    lock,
    layout,
    deleted,
    archived,
    time_of_live) => {

    try {
        const linkk = await this.getOneLink(link_id, userName);
        const linkDetails = {
            userName,
            actual_link,
            link_title,
            thumbnail,
            active,
            lock,
            layout,
            deleted,
            archived,
            time_of_live
        }

        const updatedLink = await linkk.update({
            ...linkDetails
        });

        return updatedLink;

    } catch (error) {
        console.log(error)
    }
}
