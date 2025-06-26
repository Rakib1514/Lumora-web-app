const express = require("express");
const { createUser, getUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", createUser);
router.get("/:firebaseUid", getUser);

// Export the router
module.exports = router;
