const mongoose=require('mongoose');
const {Schema} = require('mongoose');
const userSchema=new Schema({
    name:{ String, required:true},
    email: { String, required:unique },
    password: { String, required:true},
    age: Number, 
    role : { String, required:true},
     createdAt: { Date, required:Date.now}
}); 

const user=mongoose.model('User',userSchema);
module.exports = user;