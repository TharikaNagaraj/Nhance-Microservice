const mongoose = require("mongoose")
const Schema = mongoose.Schema

const imgSchema = new Schema({
    imgName:{
        type : String,
        required : true
    },
    imgPath:{
        type : String,
        required : true
    }
})

const Image = mongoose.model("Image",imgSchema)

module.exports = Image

