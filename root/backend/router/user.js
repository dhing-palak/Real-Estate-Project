const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
// const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");

router.use(cookieParser());

const Authenticate = require("../middleware/authenticate");

//Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();

      // store token in cookie
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        res.json({ message: "User Login Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

//Register route
router.post("/register", async (req, res) => {
  const { name, email, person, phone, password, cpassword } = req.body;

  if (!name || !email || !person || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exists" });
    } else if (password != cpassword) {
      res.status(422).json({ error: "Password not matching" });
    } else {
      const user = new User({
        name,
        email,
        person,
        phone,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "User Registered Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/location", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//Profile route
router.get("/profile", Authenticate, (req, res) => {
  res.send(req.rootUser);
});

//Logout route
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken");
  res.status(200).send("User logout");
});

module.exports = router;
