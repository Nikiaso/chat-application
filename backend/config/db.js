const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
const uri =
  "mongodb+srv://b14ck_5m0k3:Z0AcyXmFgU2pjPsV@cluster0.swu6iwp.mongodb.net/";
const connectDB = async () => {
  try {
    const Conn = await mongoose.connect(uri);
    console.log(`MongoDB connection: ${Conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
