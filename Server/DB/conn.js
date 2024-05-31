const mongoose = require("mongoose");

const DB =
  "mongodb+srv://akashvadgasiya1832:Akashpatel18@cluster0.jl5krnv.mongodb.net/MERN?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
