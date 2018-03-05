const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Product");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/productsRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
