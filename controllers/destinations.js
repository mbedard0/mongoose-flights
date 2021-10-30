import { Destination } from '../models/destination.js'


function newDestination(req, res) {
  res.render('destinations/new')
}

export {
  newDestination as new
}