const mongoose = require('mongoose');

const db = async ()=>{
    try{
        connectdb = await mongoose.connect("mongodb://localhost:27017/mernchatapp");
        console.log("MongoDB connected at:",connectdb.connection.host)
    }catch(Err)
    {
        console.log(Err);
        process.exit();
    }
};


module.exports = db;