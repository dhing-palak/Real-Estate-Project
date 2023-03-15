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
const locationRoute = require("./router/user");

app.use(express.json());
app.use("/user", userApi);
app.use("/location", locationRoute);
const propertyApi = require("./router/post");
const propertydetailsApi = require("./router/property");
const searchPropertyApi = require("./router/search");
const UserContact=require("./router/userContact");

app.use(express.json());

app.use("/property", propertydetailsApi);
app.use("/post", propertyApi);

app.use("/search", searchPropertyApi);
app.use("/usercontact",UserContact);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});