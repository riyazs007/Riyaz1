const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const favi=require('./validate')
const upd=require('./update')
const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/Node").then(()=>{
    console.log("Database Connected")
})
//here posting data in databasw
app.post("/send",async(req,res)=>{
    const data=await new favi(req.body)
    data.save()
    res.send({success:true, message:"Data Saved Successfully",data:data})
})

//here retrieving data from database
upd

//here updating one record
app.put("/edit", async(req,res)=>{
    const {_id,...rest}=req.body;
    const id=req.body._id;
    console.log(rest);
    await favi.updateOne({_id:id},rest)
    res.send({success:true, message:"Data Updated Successfully"})
})

//here deleting one record
app.delete("/unlink/:id",async(req,res)=>{
const id=req.params.id;
await favi.deleteOne({_id:id})
res.send({
    success:true,
    message:" Data Deleted Successfully"
})
})

app.listen(1432,()=>console.log("server running successfully"))