const mongoose = require("mongoose")

const mongooseURL = 'mongodb://localhost:27017';

const connectToMongo = () => {
    mongoose.connect(mongooseURL, () => {
        console.log("Connected to DB")
    })
}

module.exports = connectToMongo;