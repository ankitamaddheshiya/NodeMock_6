const express = require("express")
const {connection} = require("./config/db")
const {UserRouter} = require("./route/user.route")
const {flightRouter} = require("./route/flight.route")
const {bookingRouter} = require("./route/booking.route")

const {auth} = require("./middleware/auth.middleware")
const app = express()

app.use(express.json())


app.get("/",(req,res)=>{
  res.send("Flight booking for Ankita..........")
})

//routes==========================
app.use("/users",UserRouter)
app.use(auth)
app.use("/",bookingRouter)
app.use("/flights",flightRouter)


app.listen(process.env.port,()=>{
    try{
        connection
        console.log("Server is running at port 3000")
    }catch(err){
        console.log(err)
    }
})

