const express = require("express");
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../models/user");

//To make more
router.get(`/getuserdets`, fetchUser, async(req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        res.json(user);
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

//Checked. Works fine now. Don't touch it no more!!!
router.put(`/modifyuser`, fetchUser, async(req, res) => {
    try{
        let amount = req.body.amount;
        
        let useDets = await User.findOne({_id: req.params.id});
        if (!useDets)
        {
            return res.status(404).json({"success": false, "message": "Can't find user"})
        }

        useDets.amount = amount;

        useDets = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: useDets},
            {new: true}
        )
        res.status(200).json({"success": true})
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

module.exports = router;