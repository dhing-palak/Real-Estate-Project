const express = require("express");
const router = express.Router();
// const bodyParser = require("body-parser");
// var fs = require("fs");
// var path = require("path");
// require("dotenv/config");

require("../db/conn");
// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())

// // Set EJS as templating engine
// router.set("view engine", "ejs");

// // Step 5 - set up multer for storing uploaded files

// var multer = require("multer");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads")
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now())
//   }
// });

// var upload = multer({ storage: storage });
// var imgModel = require('./model');

const Property = require("../model/postPropertySchema");

//post route
router.post("/property", async (req, res) => {
  const {
    iam,
    name,
    email,
    phone,
    propertyfor,
    city,
    locality,
    rooms,
    propertytype,
    area,
    floors,
    price,
    ratepersqft,
    status,
    description,
    // image,
  } = req.body;
  console.log(req);

  if (
    !iam ||
    !name ||
    !email ||
    !phone ||
    !propertyfor ||
    !city ||
    !locality ||
    !rooms ||
    !propertytype ||
    !area ||
    !floors ||
    !price ||
    !ratepersqft ||
    !status ||
    !description
    // !image
  ) {
    return res.status(422).json({ error: "Plz fill the fields properly" });
  }

  try {
    const property = new Property({
      iam,
      name,
      email,
      phone,
      propertyfor,
      city,
      locality,
      rooms,
      propertytype,
      area,
      floors,
      price,
      ratepersqft,
      status,
      description,
      // image,
    });
    await property.save();
    res.status(201).json({ message: "Post Property Successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
