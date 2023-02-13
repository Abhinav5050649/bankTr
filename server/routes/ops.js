const express = require("express");
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const User = require("../models/user");

//To make more
router.get(`/getuserdets`, async(req, res) => {
    try{
        const user = await User.findOne({"email": req.headers.email});
        console.log(user)
        res.json(user);
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

//Checked. Works fine now. Don't touch it no more!!!
router.put(`/modifyuser`, async(req, res) => {
    try{
        //console.log(req)
        const {email, amount, status} = req.body;
        let useDets = await User.findOne({"email": email});
        if (!useDets)
        {
            return res.status(404).json({"success": false, "message": "Can't find user"})
        }

        if (useDets.amount === null) useDets.amount = 0;

        if (status === "W")    useDets.amount -= amount;
        else if (status === "D")   useDets.amount += amount;

        useDets = await User.findOneAndUpdate(
            {_id: useDets._id},
            {$set: useDets},
            {new: true}
        )
        res.status(200).json({"success": true, "message": "Operation Successful"})
    }catch(error){
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
});

module.exports = router;