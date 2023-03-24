const express = require("express");
const router = express.Router();

require("../db/conn");

const UserContact = require("../model/userContactSchema");

// POST route for creating a new user contact
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(422).json({ error: "Please fill all the fields properly" });
  }

  try {
    const userContact = new UserContact({ name, email, phone });
    await userContact.save();
    res.status(201).json({ message: "Thank you! We will contact you soon." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});
module.exports = router;
