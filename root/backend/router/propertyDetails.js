const express = require("express");
const router = express.Router();

require("../db/conn");
const Property = require("../model/postPropertySchema");

router.get("/:cityName", (req, res) => {

  if (req.params.cityName != "all") {
    Property.find({ city: req.params.cityName }, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data);
      }
    });
  } else {
    Property.find((err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data);
      }
    });
  }

});

module.exports = router;
