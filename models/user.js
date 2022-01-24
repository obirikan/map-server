const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max:20,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},
{timestamps:true})

module.exports=mongoose.model('user',userSchema)