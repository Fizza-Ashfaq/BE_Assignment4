const express=require('express');
const mongoose=require('mongoose');
const {Schema}=require('mongoose');
const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/books').then(()=>console.log('mongodb'));
const bookSchema=new Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    year:{type:Number, required:false},
    genre:{type:String, required:true},
    summary:{type:String, required:false},
});
const Book=mongoose.model('Book',bookSchema);
app.post('/books',async(req,res)=>
{
    const data=req.body;
    const obj=await Book.create(data);
    res.json(obj);

})
const port=8000;
app.listen(port);