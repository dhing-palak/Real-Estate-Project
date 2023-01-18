const express = require("express");
const router = express.Router();

require("../db/conn");
const Property = require("../model/postPropertySchema");

router.get("/propertydetails", (req, res) => {
  //   fetching if we pass all parameter
  if (req.query.city && req.query.propertytype && req.query.price) {
    Property.find(
      {
        city: req.query.city,
        propertytype: req.query.propertytype,
        price: req.query.price,
      },
      (err, data) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.status(200).send(data);
        }
      },
    );
  }
  
  // fetching if we pass city and propertytype
  else if (req.query.city && req.query.propertytype) {
    Property.find(
      { city: req.query.city, propertytype: req.query.propertytype },
      (err, data) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.status(200).send(data);
        }
      },
    );
  }
  
  // fetching if we pass city and price
  else if (req.query.city && req.query.price) {
    Property.find({ city: req.query.city, price: req.query.price }, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data);
      }
    });
  }
  
  // fetching if we pass city
  else {
    Property.find({ city: req.query.city }, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data);
      }
    });
  }
});

module.exports = router;
