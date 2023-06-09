const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
// db connection
const uri =
  "mongodb+srv://manishankarkumar789:mani@cluster0.higpzbh.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB working");
  })
  .catch((err) => {
    console.log(err);
  });

 const newRoutes = require('./routes/news')
 app.use(newRoutes)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("server is running on port 3001" );
});
