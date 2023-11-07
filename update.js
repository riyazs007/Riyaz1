const express=require('express')
const app=express()

const update=app.get("/getback",async(req,res)=>{
    const data=await favi.find({})
    res.json({success:true, message:"Data Retrived successfully",data:data})
})

module.exports=update