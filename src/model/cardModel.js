const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({

cardNumber :{type:String}, //Auto_increment e.g: C001
cardType:{type: String,enum:['REGULAR','SPECIAL']},
customerName:{ String},
status:{ type:String ,enum:['ACTIVE','INACTIVE'] ,Default: 'ACTIVE'},
vision:{type: String},
customerID:{type: String,ref:'customer'}
},{timestamp:true})

module.exports=mongoose.model('card',cardSchema)