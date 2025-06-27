const express = require("express");
const connectDB = require("./src/config/db");
const cors = require("cors");

// Importing routes
const itemRoute = require("./src/routes/itemRoute");
const categoryRoute = require("./src/routes/categoryRoute");
const userRoute = require("./src/routes/userRoute");
const authRoute = require("./src/routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// using routes
app.use("/api/auth", authRoute);
app.use("/api/items", itemRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Lumora's API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
