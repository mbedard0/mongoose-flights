import mongoose from 'mongoose'
const Schema = mongoose.Schema

let destinationSchema = new Schema({
  airport: {type: String}
  }, {
    timestamps: true,
})

const Destination = mongoose.model('Destination', destinationSchema)

export {
  Destination
}