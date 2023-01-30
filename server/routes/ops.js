const express = require("express");
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");
const router = express.Router();
const stockS = require("../models/stocksDets");
const { findOneAndUpdate } = require("../models/user");

//To make more