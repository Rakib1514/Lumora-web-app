const express = require("express");
const { createUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);

// Export the router
module.exports = router;
