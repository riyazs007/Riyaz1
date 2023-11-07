const express=require('express')
const app=express();

const update=app.put("/edit", async(req,res)=>{
    const {_id,...rest}=req.body;
    const id=req.body._id;
    console.log(rest);
    await favi.updateOne({_id:id},rest)
    res.send({success:true, message:"Data Updated Successfully"})
})
module.exports=update;