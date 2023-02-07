const Flight = require("../models/flight");


module.exports = {
  index,
  new: newFlight,
  create
};


//function show(req, res) {
 // Flight.findById(req.params.id, function(err, flight) {
  //  if(err) return res
 // })


//}


function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights, title: 'Flights' });
  });
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

function create(req, res) {
  Flight.create(req.body, function(err, flight) {
      res.redirect('/flights');
  });
}