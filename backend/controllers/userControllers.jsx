const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.jsx");
const { generateToken } = require("../config/generateToken.js");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide all fields!");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already in use.");
  }
  // Create a new user
  const createdUser = await User.create({
    name,
    email,
    password,
    pic,
  });
  // Return the created user
  if (createdUser) {
    return res.status(201).json({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      pic: createdUser.pic,
      token: generateToken(createdUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

module.exports = { registerUser };
