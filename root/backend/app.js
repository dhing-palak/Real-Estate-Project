/* eslint-disable no-unused-vars */
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

dotenv.config({ path: "./config.env" });
require("./db/conn");
const User = require("./model/userSchema");

const Property = require("./model/postPropertySchema");

const userApi = require("./router/user");
const propertyApi = require("./router/post");
const propertydetailsApi = require("./router/propertyDetails");

app.use(express.json());
app.use("/user", userApi);

app.use("/get", propertydetailsApi);
app.use("/post", propertyApi);

const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server is running at port ${PORT}`);
});
