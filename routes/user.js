const router=require('express').Router()
const users =require('../models/user.js')
const bcrypt=require('bcrypt')

//register
router.post('/register',async (req,res)=>{
    try {
         //generate new password
         const salt=await bcrypt.genSalt(10)
         const hashedPassword=await bcrypt.hash(req.body.password,salt)
         //create user
         const newUser=new users({
             username:req.body.username,
             email:req.body.email,
             password:hashedPassword,
         })
        //save user and send response
         const user=await newUser.save()
        res.status(200).json(user)
        } catch (error) {
        res.status(500).json(error)
        }
 
})
//login
router.post('/login',async (req,res)=>{
 try{
    //find user
    const user=await users.findOne({username:req.body.username})
    !user && res.status(400).json('wrong username or password')
    //validate user
    const validpassword=await bcrypt.compare(req.body.password,user.password)
    !validpassword && res.status(400).json('wrong username or password')
    //send response
     res.status(200).json({_id:user._id,username:user.username})
 }catch(err){
     res.status(500).json(err)
 }
})


module.exports=router