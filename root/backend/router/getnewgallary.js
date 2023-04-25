const express = require("express");
const router = express.Router();

require("../db/conn");
const gallary = require("../model/newProjectGallary");

router.get("/", async (req, res) => {
  try {
    //const gall = await gallary.find();
    //res.json(gall)\
    gallary.find((err, data) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(data);
      }
    });
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
