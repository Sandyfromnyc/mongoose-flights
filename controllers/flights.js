const flights = require("../models/flights");
const Flights = require("../models/flights");

module.exports = {
  index,
  new: newFlight,
  create
};

function index(req, res) {
  Flights.find({}, function (err, flights) {
    res.render("flights/index", { flights, title: 'Flights' });
  });
}

function newFlight() {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
  departsDate += `-${dt.getDate().toString().padStart(2, "0")}T${dt
    .toTimeString()
    .slice(0, 5)}`;
  res.render("flights/new", { departsDate });
}

function create(res, req) {
    flight.create(res, req);
    res.redirect('/flights');
}