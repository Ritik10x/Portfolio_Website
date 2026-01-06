const express = require('express')
const Connect = require('./Connecton')
const dataBaseSchema = require('./Model/dataBase')
const { connect } = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
/*app.use(cors()) its good for testing but when deploy thats how*/
app.use(cors({
  origin: "https://ritik-portfolio-site.netlify.app",
  methods: ["GET", "POST"],
}));

app.get('/home',(req,res)=>{
    res.send('get is Working')
})

app.post('/datastorage',async(req,res)=>{
    try{

       const{ Name,Phone,Email,Message} = req.body 

       const dbScheme = await dataBaseSchema.create({

         Name,Phone,Email,Message

       })
       res.status(200).json({Message:"Post is working Good",details:dbScheme})

    }
    catch(err){
        res.status(500).json({Message:"Error Found in Post APi",details:err.message})
    }
})


const PORT = process.env.PORT || 3000;


Connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});