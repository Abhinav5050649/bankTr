const mongoose = require("mongoose")

const mongooseURL = '';

const connectToMongo = () => {
    mongoose.connect(mongooseURL, () => {
        console.log("Connected to DB")
    })
}

module.exports = connectToMongo;