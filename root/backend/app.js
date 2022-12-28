const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

dotenv.config({ path: "./config.env" });
require("./db/conn");
const User = require("./model/userSchema");
const userApi = require('./router/user')
const locationRoute=require('./router/user')

app.use(express.json());
app.use('/user',userApi)
app.use('/location',locationRoute);


const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server is running at port ${PORT}`);
});