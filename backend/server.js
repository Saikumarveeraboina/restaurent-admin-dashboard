const express = require("express");
const cors = require("cors");
require("dotenv").config();
const notFound = require("./middlewares/notFound.middleware");
const errorHandler = require("./middlewares/error.middleware");



const connectDB = require("./config/db");

const app = express();
connectDB();

aapp.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://restaurent-dashboard.netlify.app"
    ]
  })
);

app.use(express.json());


app.use("/api/menu", require("./routes/menu.routes"));
app.use("/api/orders", require("./routes/order.routes"));
app.use("/api/analytics", require("./routes/analytics.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
