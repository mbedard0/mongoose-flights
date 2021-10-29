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
  let departure = new Date(req.body.departs)
  req.body.departs = departure.toUTCString()
  Flight.create(req.body, function(error, flight) {
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    res.render('flights/show', {
      flight,
      title: 'Flight Details',
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

export {
  index,
  newFlight as new,
  create,
  show,
  createTicket
}