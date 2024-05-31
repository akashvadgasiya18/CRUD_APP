require("dotenv").config();
require("./DB/conn");
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 
const users = require("./models/userSchema");
const cors = require("cors");

const router = require("./Routes/router");

const port = 3001;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`server is start in port number ${port}`);
});
