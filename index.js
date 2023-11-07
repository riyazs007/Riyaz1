const express =require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const favi=require('./validate')
const upd=require('./update')
const getdata=require('./getdata')
const save=require('./save')
const deletedata=require('./delete')
const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://0.0.0.0:27017/Node").then(()=>{
    console.log("Database Connected")
})
//here posting data in database
save

//here retrieving data from database
getdata

//here updating one record
upd

//here deleting one record
deletedata

app.listen(1432,()=>console.log("server running successfully"))