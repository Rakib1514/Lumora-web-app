const User = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    // Validate user data
    if (!userData.email || !userData.firebaseUid) {
      return res.status(400).json({ message: "User creation failed" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: userData.email }, { firebaseUid: userData.firebaseUid }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const newUser = await User.create(userData);
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  const { uid } = req.params;

  try {
    const user = await User.findById(uid);

    if (!user) {
      throw new Error("User Not find");
    }

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    console.log("Error getting user", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createUser,
  getUser,
};
