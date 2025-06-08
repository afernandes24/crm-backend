const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const customersRoute = require("./routes/customers");
const authRoute = require("./routes/auth");

app.use("/customers", customersRoute);
app.use("/", authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Połączono z MongoDB");
    app.listen(5000, () => console.log("Serwer na porcie 5000"));
  })
  .catch((err) => console.error(err));
