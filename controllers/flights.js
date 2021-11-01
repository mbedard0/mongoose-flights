import { Destination } from '../models/destination.js'
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

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body, function(error, flight) {
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('destination')
  .exec(function(error, flight) {
    Destination.find({_id: {$nin: flight.destination}}, function(error, destinations) {
    res.render('flights/show', {
      flight,
      title: 'Flight Details',
      destinations
    })
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    flight.ticket.push(req.body)
    flight.save(function(error) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addDestination(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    flight.destination.push(req.body.destinationID)
    flight.save(function(error) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  index,
  newFlight as new,
  create,
  show,
  createTicket,
  addDestination
}