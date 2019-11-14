const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Contact = db.Contact;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll(page) {

    const resPerPage = 5; // results per page

    const contacts = await Contact.find().skip((resPerPage * page) - resPerPage).limit(resPerPage);

    // Count how many contacts were found
    const numOfContacts = await Contact.count();
    
    const pages = Math.ceil(numOfContacts / resPerPage);
    return {
        ...contacts,
        page,
        pages
    };
}

async function getById(id) {
    return await Contact.findById(id);
}

async function create(contactParam) {

    const contact = new Contact(contactParam);

    // save contact
    const result = await contact.save();

    return {
        ...result
    }
}

async function update(id, contactParam) {

    const contact = await Contact.findById(id);

    // copy contactParam properties to contact
    Object.assign(contact, contactParam);

    const result = await contact.save();

    return {
        ...result
    };
}

async function _delete(id) {
    await Contact.findByIdAndRemove(id);
}