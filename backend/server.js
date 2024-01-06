const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { chats } = require("./data/data.jsx");

const app = express();
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleData = chats.find((elm) => elm._id === req.params.id);
  res.send(singleData);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`server started on port ${PORT}...`));
