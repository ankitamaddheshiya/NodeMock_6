const express = require ("express")
const {flightModel} = require("../models/flight.model");

const flightRouter = express.Router();


// get all the data =================

flightRouter.get ("/",async(req,res)=>{
    try{
        let allflightData = await flightModel.find();
        console.log(allflightData.length);
        res.status(200).send(allflightData)
    }catch(err){
        res.status(400).send({err:err.message})
    }
})


// get flights by id===================


flightRouter.get("/:id",async(req,res)=>{
    let id = req.params.id;
    console.log(id)

    try{
        let data = await flightModel.findById(id);
        res.status(200).send(data)
    }catch(err){
        res.status(400).send({err:err.message})
    }
})



// add flights to system==================


flightRouter.post("/",async(req,res)=>{
    let data = req.body;
    try{
        let flight = new flightModel(data)

        await flight.save();
        res.status(200).send("flight data add successfully")
    }catch(err){
        res.status(400).send({err:err.message})
    }
})


///update flight data here=====================


flightRouter.patch("/:id",async(req,res)=>{
    let id = req.params.id;
    let data = req.body;

    try{
        await flightModel.findByIdAndUpdate(id,data);
        res.status(200).send("flight data updated successfully")
    }catch(err){
        res.status(400).send({err:err.message})
    }
})




// delete the flight data here ===================================


flightRouter.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    try{
        await flightModel.findByIdAndDelete(id)
        res.status(200).send("flight data deleted successfully")
    }catch(err){
        res.status(400).send({err:err.message})
    }
})


module.exports={
    flightRouter
}