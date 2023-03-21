const express = require("express");
const router = express.Router();

require("../db/conn");

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
    amenitiesData,
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
    !description ||
    !amenitiesData
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
      amenitiesData,
      // image,
    });
    await property.save();
    res.status(201).json({ message: "Post Property Successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
