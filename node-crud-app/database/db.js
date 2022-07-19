import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.m35oi.mongodb.net/product?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology : true, useNewUrlParser : true });
        console.log('Database connected successfully');
    } catch (err) {
       console.log("Error while connecting with the database", err); 
    }
}

export default Connection;

