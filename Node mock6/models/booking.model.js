const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
   
        user : { type: mongoose.Schema.ObjectId, ref: 'User' },
        flight : { type: mongoose.Schema.ObjectId, ref: 'Flight' }
   }
   
)

const bookingModel = mongoose.model("booking", bookingSchema)

module.exports = {
    bookingModel
}