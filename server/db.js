const mongoose = require("mongoose")

const mongooseURL = 'mongodb+srv://abhinavsharma:abhinav1234@cluster0.tu3yoxu.mongodb.net/testdbs?retryWrites=true&w=majority';

const connectToMongo = () => {
    mongoose.connect(mongooseURL, () => {
        console.log("Connected to DB")
    })
}

module.exports = connectToMongo;