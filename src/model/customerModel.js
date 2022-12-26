const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
firstName :{type:String},
lastName:{type: String},
mobileNumber:{type: String },     //10 digits long
DOB :{type:Date},
emailID:{ type:String},               //abc@xyz.com
address:{ type:String},
customerID:{type: String},              // UUID
status:{ type:String,enum:['ACTIVE','INACTIVE'] }
},{timestamps:true})


module.exports = mongoose.model("customer",customerSchema)