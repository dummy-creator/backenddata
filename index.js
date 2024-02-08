require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 6867;
app.use(express.json());
const product_route = require("./routing/productrout");

app.use("/api/products", product_route);

app.listen(port, async () => {
  return mongoose.connect(process.env.MONGO_URL);
});
