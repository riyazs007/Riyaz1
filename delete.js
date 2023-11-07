const express=require('express')
const app=express();

const deletedata=app.delete("/unlink/:id",async(req,res)=>{
    const id=req.params.id;
    await favi.deleteOne({_id:id})
    res.send({
        success:true,
        message:" Data Deleted Successfully"
    })
    })
    module.exports=deletedata