const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    company: { type: String, required: false },
    email: { type: String, required: false },
    address: { type: String, required: false },
    phone: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Contact', schema);