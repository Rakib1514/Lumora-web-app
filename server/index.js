const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");

// Importing routes
const itemRoute = require("./src/routes/itemRoute");
const categoryRoute = require("./src/routes/categoryRoute");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// using routes
app.use("/api/items", itemRoute);
app.use("/api/categories", categoryRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Lumora's API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
