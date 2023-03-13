const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userInfoschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const UserInfo = mongoose.model("UserInfo",userInfoschema)

module.exports = UserInfo


