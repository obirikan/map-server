const router=require('express').Router()
const pins =require('../models/pins')

//create a pin 
router.post('/',async (req,res)=>{
    const newPin=new pins(req.body)
    try{
       const savedpin=await newPin.save()
       res.status(200).json(savedpin)
    }catch(err){
       res.status(500).json(err)
    }
})
//get all pins
router.get('/',async (req,res)=>{
   try {
      const pin=await pins.find()
      res.status(200).json(pin)
   } catch(err){
      res.status(500).json(err)
   }
})

module.exports=router