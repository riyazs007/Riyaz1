const mongoose=require('mongoose')

const favi=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    nickname:{
        type:String,
        required:true
    }
})

//creating model (Collection using schema)
const MyFavourite=mongoose.model("MyFavourite",favi)

module.exports=MyFavourite;