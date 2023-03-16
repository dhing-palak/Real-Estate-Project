const mongoose = require("mongoose");

const userContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});
const UserContact = mongoose.model("UserContact", userContactSchema);

module.exports = UserContact;
