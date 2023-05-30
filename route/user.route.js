const express = require("express")
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model")

const UserRouter = express.Router()


//register user data===========================


UserRouter.post("/register", async (req, res) => {
    let { name, email, password } = req.body;
    try {
        //if Users is already exist======================
        let user = await UserModel.find({ email })
        if (user.length > 0) {
            res.send("User is already exists here")
        } else {
            bcrypt.hash(password, 5, async (err, hashPassword) => {

                if (hashPassword) {
                    console.log(hashPassword);
                    let newUser = new UserModel({ name, email, password: hashPassword })
                    await newUser.save();

                    res.status(201).json({ message: "user registered successfully...." })
                } else {
                    res.status(400).json({ message: err.message })
                }
            })
        }

    } catch (err) {
        console.log(err)

    }
})


UserRouter.post("/login", async (req, res) => {
    let { email, password } = req.body;

    try {
        //if already  exist the user===================

        let user = await UserModel.find({ email })
        if (user.length === 0) {
            res.status(404).send("user is not found")
        } else {
            let hashPass = user[0]?.password;
            bcrypt.compare(password, hashPass, async (err, result) => {
                if (result) {
                    let token = jwt.sign({ user_Id: user[0]._id, }, "masai", { expiresIn: "7d" });
                    res.status(201).json({ message: "user login Successfully", token })
                }
            })
        }
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = {
    UserRouter
}