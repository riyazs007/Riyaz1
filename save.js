const express=require('express')
const app=express();

const save=app.post("/send",async(req,res)=>{
    const data=await new favi(req.body)
    data.save()
    res.send({success:true, message:"Data Saved Successfully",data:data})
})

module.exports=save