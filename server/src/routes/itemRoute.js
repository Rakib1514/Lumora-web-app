const express = require("express");
const router = express.Router();
const { getItems, addItem, getSingleItem } = require("../controllers/itemController");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

router.get("/", getItems);
router.get("/:id", getSingleItem)
router.post("/", verifyToken, verifyAdmin, addItem);


module.exports = router;
