const express = require("express");
const router = express.Router();

require("../db/conn");

const newGallary = require("../model/newProjectGallary");

router.post("/gallary", async (req, res) => {
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
    furnishedStatus,
    bathrooms,
    transactionType,
    PropertyAvailability,

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
    !amenitiesData ||
    !furnishedStatus ||
    !bathrooms ||
    !transactionType ||
    !PropertyAvailability
    // !image
  ) {
    return res.status(422).json({ error: "Plz fill the fields properly" });
  }

  try {
    const newgallary = new newGallary({
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
      furnishedStatus,
      bathrooms,
      transactionType,
      PropertyAvailability,

      // image,
    });
    await newgallary.save();
    res.status(201).json({ message: "Post Property Successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
