const express = require("express");
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../models/user");

//To make more
router.get(`/getuserdets`, fetchUser, async(req, res) => {
    try{
        const user = await User.findOne({email: req.headers.email});
        res.json(user);
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

//Need to check this once more
router.put(`/modifyuser/:id`, fetchUser, 
[
    body("amount").exists(),
],
async(req, res) => {
    try{
        let amount = req.body.amount;

        const data = {};

        if (amount) data.amount = amount;
        
        let useDets = await User.findById(req.params._id);
        if (!useDets)
        {
            return res.status(404).send("Not Found!!!");
        }

        useDets.amount = data.amount;

        useDets = await User.findOneAndUpdate(
            req.params._id,
            {$set: useDets},
            {new: true}
        )
        
        res.json("Success");
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

module.exports = router;