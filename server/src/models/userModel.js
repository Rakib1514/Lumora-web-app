const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    image: {
      type: String,
      default: "https://i.ibb.co/JBBRm0K/istockphoto-1321617070-1024x1024-1.jpg",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);
module.exports = User;
