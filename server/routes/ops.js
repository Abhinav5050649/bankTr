const express = require("express");
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../models/user");
//To make more

router.get(`/getuser`, fetchUser, async(req, res) => {
    try{
        const user = await User.findOne(req.body.email);
        res.json(user);
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

router.put(`/modifyuser/:id`, fetchUser, 
[
    body("email").isEmail(),
    body("amount") >= 0.00,
],
async(req, res) => {
    try{
        let amount = req.body.amount;

        const data = {};

        if (amount) data.amount = amount;
        
        let useDets = await User.findById(req.params.id);
        if (!useDets)
        {
            return res.status(404).send("Not Found!!!");
        }

        useDets = await User.findOneAndUpdate(
            req.params.id,
            {$set: useDets},
            {new:true}
        )
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

module.exports = router;