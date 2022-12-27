const express = require("express");
const router = express.Router();

require("../db/conn");
const Property = require("../model/postPropertySchema");

//post route
router.post("/property", async (req, res) => {
  const { iam, name, email, phone, propertyfor, city, locality, rooms, propertytype, area, floors, price, status, description } = req.body;

  if (!iam ||  !name || !email || !phone || !propertyfor ||  !city || !locality ||  !rooms  ||  !propertytype  ||  !area  ||  !floors  ||  !price  ||  !status  ||  !description ) {
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
        status,
        description
      });
      await property.save();
      res.status(201).json({ message: "Post Property Successfully" });
    }
   catch (error) {
    console.log(error);
  }

});



module.exports = router

