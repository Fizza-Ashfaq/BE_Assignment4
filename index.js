const express=require('express');
const mongoose=require('mongoose');
const {schemas}=require('mongoose');
const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost/mydatabase').then(()=>console.log('mongodb'));
const bookSchema=new Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    year:{type:Number, required:false},
    genre:{type:String, required:true},
    summary:{type:String, required:false},
});