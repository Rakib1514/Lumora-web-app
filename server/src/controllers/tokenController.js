const jwt = require("jsonwebtoken");

const setTokenCookie = (req, res) => {
  const uid = req.body;

  const token = jwt.sign(uid, process.env.JWT_SECRET, { expiresIn: "1d" });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", //only true HTTPS when production
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({ success: true, message: "JWT signed in" });
};

const clearTokenCookie = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
    })
    .json({ message: "JWT signed out" });
};

module.exports = { setTokenCookie, clearTokenCookie };
