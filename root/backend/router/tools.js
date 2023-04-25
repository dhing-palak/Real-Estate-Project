/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");

require("../db/conn");
const User = require("../model/userSchema");
router.use(cookieParser());

const Authenticate = require("../middleware/authenticate");

//Advice route
router.post("/legaladvice", Authenticate, async (req, res) => {
  try {
    const { name, email, phone, city, advice } = req.body;

    if (!name || !email || !phone || !city || !advice) {
      console.log("error in contact form");
      return res.json({ error: "Plz fill the legal advice form" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userAdvice = await userContact.addAdvice(name, email, phone, city, advice);
      await userContact.save();
      res.status(201).json({ message: "User contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;