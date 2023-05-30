require("dotenv").config();

const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://ankitag:ankitag@cluster0.hdym8s8.mongodb.net/AirticketData?retryWrites=true&w=majority")


module.exports={
    connection
}

