const mongoose  = require('mongoose');

const connectDB = async () => { 
    try {
      const conn = await mongoose.connect(
        "mongodb+srv://albin:albin@cluster0.na0x4tt.mongodb.net/shoppingCart?retryWrites=true&w=majority"
      );
      console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (err) {
      console.log(`error:${err.message}`);
      process.exit();
    }
  };
  
  module.exports = connectDB;