const express=require('express')
const mongoose=require('mongoose')
const pinRoute=require('./routes/pin')
const userroute=require('./routes/user')
const cors=require('cors')
const app=express()



//middlewares
app.use(cors())
app.use(express.json())
app.use('/api/pins',pinRoute)
app.use('/api/user',userroute)

//database connection
const port=process.env.PORT || 5000

mongoose.connect('mongodb+srv://kelvin:salvation22@cluster0.iaa1e.mongodb.net/map',{useNewUrlParser:true}).then(()=>{
    console.log('connected')
}).catch(err=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})