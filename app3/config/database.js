const mongoose = require("mongoose")

const configureDatabase = () => 
{
    mongoose.connect("mongodb://localhost:27017/app3")
        .then(() => 
        {
            console.log("connected to database")
        })
        .catch(() => 
        {
            console.log("error connecting to database")
        })
}

module.exports = configureDatabase