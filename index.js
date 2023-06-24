const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
require("dotenv").config();
const {connect}=require("./src/config/db")
const {Userrouter}=require("./src/routes/user.route")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/user",Userrouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });