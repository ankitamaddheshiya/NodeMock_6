const express = require("express")
const { bookingModel } = require("../models/booking.model");
const bookingRouter = express.Router()

bookingRouter.post("/booking", async (req, res) => {
    let bookingData = {
        user: req.body.user_Id,
        flight: req.body.flight
    }

    try {
        let booking = new bookingModel(bookingData)
        await booking.save()
        res.status(201).send({ message: "Flight booked successfull" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})




bookingRouter.get("/dashboard", async (req, res) => {
    try {
        let data = await bookingModel.find()
        res.status(200).send(data)

    } catch (err) {
        res.status(400).json(err.message)
    }
})


module.exports = {
    bookingRouter
}