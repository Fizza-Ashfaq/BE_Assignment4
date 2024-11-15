const express=require('express');
const mongoose=require('mongoose');
const {Schema}=require('mongoose');
const app=express();
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config({ path: './mongoose.env' });
const url=process.env.URL;

mongoose.connect(url).then(()=>console.log('mongodb'));
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

});

app.get('/getbooks',async(req,res)=>
{
    const data=await Book.find({});
    res.json(data);
});

app.get('/getbooksbyId/:id',async(req,res)=>
{
    const id=req.params.id;
    const data=await Book.findById({_id:id});
    res.json(data);
});

app.get("/getbooksbySearch",async(req, res) =>
{
    const search=req.query.title ||req.query.author;
    const obj=await Book.find({$or: [
        { title: search },
        { author: search }
    ]});
    if(obj.length > 0)
    {
        res.json(obj);
    }
    else
    {
        res.status(404).json({message:'No book found'});
    }
    
})

app.put('/updatebooks/:id',async(req, res)=>
{
    const id=req.params.id;
    const data=req.body;
    const obj=await Book.findByIdAndUpdate({_id:id}, data, {new:true});
    res.json(obj);
})

app.delete('/deletebooks/:id',async(req, res)=>
{
    const id=req.params.id;
    const obj=await Book.findByIdAndDelete({_id:id});
    res.json(obj);
})

const port=process.env.PORT;
app.listen(port);