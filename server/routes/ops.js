const express = require("express");
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../models/user");

//To make more
router.get(`/getuserdets`, async(req, res) => {
    try{
        const user = await User.findOne({email: req.headers.email});
        if (user)   res.json(user);
        else res.status(400).send(`User Not Found`);
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

//Checked. Works fine now. Don't touch it no more!!!
router.put(`/modifyuser`,
[
    body("amount").exists() && body("amount").isNumeric(),
],
async(req, res) => {
    try{
        let amount = req.body.amount;
        
        let useDets = await User.findOne({email: req.headers.email});
        if (!useDets)
        {
            return res.status(404).send("Not Found!!!");
        }
        useDets.amount = amount
        useDets = await User.findOneAndUpdate(
            {email: req.headers.email},
            {$set: useDets},
            {new: true}
        )
        console.log("Success")
        console.log(useDets)
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

module.exports = router;