const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({

cardNumber :{type:string}, //Auto_increment e.g: C001
cardType:{type: String,enum:[REGULAR/SPECIAL]},
customerName:{ string},
status:{ type:string ,enum:[ACTIVE/INACTIVE] ,Default: ACTIVE},
vision:{type: string},
customerID:{type: string,ref:'customer'}
},{timestamp:true})

module.exports=mongoose.Schema('card',cardSchema)