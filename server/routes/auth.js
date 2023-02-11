const express = require("express");
const User = require("../models/user");
const {body, validationResult} = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchuser");

const JWT_SECRET = "thisIsJustATest";

let success = true

//defined routes and Tested. All routes working fine!!!

router.post(`/createuser`, 
[
    body("name").isLength({min: 3}),
    body("email").isEmail(),
    body("password").isLength({min: 5}),
],
    async(req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty())
        {
            success = false;
            return res.status(400).send({success, errors: errors.array()})
        }

        try{
            let user = await User.findOne({email: req.body.email})

            if (user)
            {
                success = false
                return res.status(400).json({success, errors: `Account exists!`})
            }

            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
                amount: 0.00,
            })

            const data = {
                user: {
                    id: user.id,
                }
            };

            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({success, authToken});
        }   catch (error) {
            console.error(error);
            res.status(500).send(`Internal Server Error!!!`);
        }
    }
);

router.post(`/login`, 
    [
        body("email").isEmail(),
        body("password").isLength({min: 5}),
    ], async(req, res) => {
        try{
            const user = await User.findOne({email: req.body.email})

            if (!user)
            {
                return res.status(400).json(`Incorrect Details`)
            }

            const passwordComparison = await bcrypt.compare(req.body.password, user.password);

            if (!passwordComparison){
                return res.status(400).json({error: `Incorrect Details!`});
            }

            const data = {
                user: {
                    id: user.id,
                },
            }

            const authToken = jwt.sign(data, JWT_SECRET);

            res.json({success: authToken});
        }   catch (error)   {
            console.error(error);
            res.status(500).send(`Internal Server Error!!!`);
        }
    }
)

router.post(`/getuser`, fetchUser, async(req, res) => {
    try{
        userId = req.user.id;
        const user = await User.findById(userId).select(`-password`);
        res.send(user);
    }   catch (error)   {
        console.error(error);
        res.status(500).send(`Internal Server Error!!!`);
    }
})

module.exports = router;