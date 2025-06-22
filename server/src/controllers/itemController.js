const Item = require("../models/itemModel");


// GET /items?page=1&limit=20
const getItems = async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page, 10) || 1);
  const limit = Math.max(1, parseInt(req.query.limit, 10) || 20);

  try {
    const items = await Item.find()
      .select("title price image stock material brand artist discount rating")
      .populate("category", "name")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);

    if (error.name === "CastError" || error.name === "SyntaxError") {
      return res.status(400).json({ message: "Bad request" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getItems,
};
