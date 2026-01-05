const express = require('express')
const Connect = require('./Connecton')
const dataBaseSchema = require('./Model/dataBase')
const { connect } = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/Home',(req,res)=>{
    res.send('get is Working')
})

app.post('/DataStorage',async(req,res)=>{
    try{

       const{ Name,Phone,Email,Message} = req.body 

       const dbScheme = await dataBaseSchema.create({

         Name,Phone,Email,Message

       })
       res.status(200).json({Message:"Post is working Good",details:dbScheme})

    }
    catch(err){
        res.status(500).json({Message:"Error Found in Post APi",details:err.Message})
    }
})


Connect
app.listen(3000,()=>{
    console.log('port is working')
})