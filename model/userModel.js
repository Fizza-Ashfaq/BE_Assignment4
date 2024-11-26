const mongoose=require('mongoose');
const {Schema} = require('mongoose');
const userSchema=new Schema({
    name:{ type:String, required:true},
    email: { type:String, required:true, unique: true},
    password: { type:String, required:true},
    age: Number, 
    role : { type:String, required:true},
    createdAt: { type:Date, default:Date.now},
    books:{
        type:Schema.Types.ObjectId,
        ref:"Book",
        required:false
    }

}); 

const user=mongoose.model('User',userSchema);
module.exports = user;