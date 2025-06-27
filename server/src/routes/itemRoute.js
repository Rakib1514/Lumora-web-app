const express = require("express");
const router = express.Router();
const { getItems, addItem } = require("../controllers/itemController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

router.get("/", getItems);
router.post("/", verifyToken, verifyAdmin, addItem);

module.exports = router;
