import { Flight } from '../models/flight.js'

function index(req, res) {
  Flight.find({}, function(error, flight) {
    res.render('flights/index', {
      flight,
      title: 'All Flights'
    }) 
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

export {
  index,
  newFlight as new,
}