const mongoose = require('mongoose')

const Connect =()=>{
    mongoose.connect('mongodb://localhost:27017/PortfolioFolder')
    .then(()=>{console.log('Connection Folder Established')})
    .catch((err)=>{console.log(err)})
}
Connect()
module.exports=Connect