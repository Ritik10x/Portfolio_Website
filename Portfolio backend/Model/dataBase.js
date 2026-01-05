const mongooseScheme = require('mongoose')

const schema = new mongooseScheme.Schema({
    Name:{type:String},
    Phone:{type:Number},
    Email:{type:String},
    Message:{type:String}
   
})
console.log("Struture Making succesful")
module.exports=mongooseScheme.model('PortfolioDataFolder',schema)