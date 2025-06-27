const express = require("express");
const {
  setTokenCookie,
  clearTokenCookie,
} = require("../controllers/tokenController");
const router = express.Router();

router.post("/jwt-signin", setTokenCookie);
router.post("/jwt-signout", clearTokenCookie);

module.exports = router;
