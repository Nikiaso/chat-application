const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

const { chats } = require("./data/data.jsx");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on port ${PORT}...`.yellow.bold));
