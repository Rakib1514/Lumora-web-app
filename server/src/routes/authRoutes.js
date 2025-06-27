const express = require("express");
const {
  setTokenCookie,
  clearTokenCookie,
} = require("../controllers/tokenController");
const { verifyAdmin, verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/jwt-signin",verifyToken, verifyAdmin, setTokenCookie);
router.post("/jwt-signout", clearTokenCookie);

module.exports = router;
