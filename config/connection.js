const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.db);
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(`error:${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
