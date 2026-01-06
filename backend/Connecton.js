const mongoose = require('mongoose')
require('dotenv').config()

const Connect = async ()=>{
    const db_url = process.env.MONGO_URL
    try{

    
     await mongoose.connect(db_url)
     console.log("MongoDB Atlas Connected Successfully");
    }
    catch(err)
    {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // stop app if DB fails
    }
    
}

module.exports=Connect