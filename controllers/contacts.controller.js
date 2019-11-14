const express = require('express');
const router = express.Router();
const contactService = require('../services/contact.service');

// routes
router.post('/create', create);
router.get('/:page', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    contactService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    contactService.getAll(req.params.page)
        .then(contacts => res.json(contacts))
        .catch(err => next(err));
}

function getById(req, res, next) {
    contactService.getById(req.params.id)
        .then(contact => contact ? res.json(contact) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    contactService.update(req.params.id, req.body)
        .then(contact => contact ? res.json(contact) : res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    contactService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}