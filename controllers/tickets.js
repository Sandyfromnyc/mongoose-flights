const Ticket = require("../models/ticket");
const Flight = require('../models/flight');

module.exports = {
    create,
}

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`)
    })
}