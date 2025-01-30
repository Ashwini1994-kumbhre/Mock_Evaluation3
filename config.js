const mongoose = require("mongoose");

const connectDb = async() = > {
    try{
        await mongoose.connectDb(" mongodb://127.0.0.1:27017 ");
        console.log("connect to database");
    }catch(err);
    
    console.log("unable to connectdb")
}

model.export = connectDb;