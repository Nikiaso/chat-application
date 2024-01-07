const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const Conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });
    console.log(`MongoDB connection: ${Conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
 