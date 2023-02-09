const Flight = require("../models/flight");
const Ticket = require("../models/ticket");


module.exports = {
  index,
  new: newFlight,
  create,
  show
}


function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render("flights/show", {title: "Flight Details", flight, tickets})
    });
  });
}

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  };
  Flight.create(req.body, (err) => {
    if(err) return res.render('flights/new')
    res.redirect('/flights')
  })
}


function newFlight(req, res) {
  const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
res.render('flights/new', { departsDate, title: "New Flight" });
}

function index(req, res) {
  Flight.find({}, function(err, flights){
    flights.sort((first, second) => first.departs - second.departs);
    res.render('flights/index', {flights})
  })
}