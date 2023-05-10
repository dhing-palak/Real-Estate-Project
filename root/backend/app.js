/* eslint-disable no-unused-vars */
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
dotenv.config({ path: "./config.env" });

require("./db/conn");

const userApi = require("./router/user");
const locationRoute = require("./router/user");
const toolsApi = require("./router/tools");
const propertyApi = require("./router/post");
const propertydetailsApi = require("./router/property");
const searchPropertyApi = require("./router/search");
const UserContact = require("./router/userContact");

app.use(express.json());
app.use(express.json());

app.use("/user", userApi);
app.use("/location", locationRoute);
app.use("/tools", toolsApi);
app.use("/property", propertydetailsApi);
app.use("/post", propertyApi);

app.use("/search", searchPropertyApi);
app.use("/usercontact", UserContact);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
