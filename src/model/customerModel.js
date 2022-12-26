const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobileNumber : String,
    DOB : Date,
    emailID : String,
    address : String,
    customerID : String,
    status : {
        type : String,
        enum : ["ACTIVE" , "INACTIVE"],
        default : "ACTIVE"
    }
    
},{timestamps : true})

module.exports = mongoose.model("customer", customerSchema)

