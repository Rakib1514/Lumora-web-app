const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "unauthorize access" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Verification failed" });
  }
};

const verifyAdmin = async (req, res, next) => {
  const user = req.user;

  try {
    const result = await User.findById(user._id);

    if (result.role !== "admin") {
      return res.status(401).json({
        message: "unauthorize access",
      });
    }

    next();
  } catch (error) {}
};

module.exports = { verifyToken, verifyAdmin };
