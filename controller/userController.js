const user=require('../model/userModel');
const adduser=async(req,res)=>{
    try {
        const data = req.body;
        const obj = await user.create(data); 
        res.status(201).send(obj); 
      } catch (error) {
        console.error(error); 
        res.status(500).send({ error: "Failed to add user" }); 
      }
}
const getuser = async(req, res)=>{
    try{
        const data=await user.find({});
        res.status(200).send(data);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: "Failed to get users" });
    }
}
const getoneuser = async(req, res)=>{
    try{
        const id=req.params.id;
        // const book=await Book.findById(id);
        const obj=await user.findById(id).populate('books');
        res.status(200).send(obj);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: "Failed to get user" });
    }
}

const updateuser=async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const obj=await user.findByIdAndUpdate(id,data,{new:true});
        res.status(200).send(obj);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: "Failed to update user" });
    }
}

const deleteuser=async(req,res)=>{
    try{
        const id=req.params.id;
        const obj=await user.findByIdAndDelete(id);
        res.status(200).send(obj);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: "Failed to delete user" });
    }
}

module.exports={
    adduser,
    getuser,
    getoneuser,
    updateuser,
    deleteuser
}
