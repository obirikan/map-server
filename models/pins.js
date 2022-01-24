const mongoose=require('mongoose')

const pinSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    lat:{
        type:Number,
        required:true,
    },
    long:{
        type:Number,
        required:true,
    }
},
{timestamps:true})

module.exports=mongoose.model('pin',pinSchema)