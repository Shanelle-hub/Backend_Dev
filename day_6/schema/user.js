const { default: mongoose, model } = require("mongoose");

const userSchema =  new mongoose.Schema({
    name:{'type':String,required:true},
    email:{'type':String,required:true},
    createdAt:{'type':Date,default:Date.now()},
    role:{'type':String,enum:['Admin','user'],default:'user'},
})
module.exports = mongoose.model ('User',userSchema)