const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema(
    {
  
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number
      }
)

const flightModel = mongoose.model("flight", flightSchema)

module.exports = {
    flightModel
}