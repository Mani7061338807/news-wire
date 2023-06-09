const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
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
  app.use(express.static(path.join(__dirname,"./client/build")));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
  })
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("server is running on port 3001" );
});
