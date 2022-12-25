const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
firstName :{type:string},
lastName:{type: string},
mobileNumber:{type: string },     //10 digits long
DOB :{type:Date},
emailID:{ type:string},               //abc@xyz.com
address:{ type:string},
customerID:{type: string},              // UUID
status:{ type:string,enum:['ACTIVE','INACTIVE'] }
},{timestamps:true})


module.exports = mongoose.model("customer",customerSchema)