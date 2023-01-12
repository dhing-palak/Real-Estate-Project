const mongoose = require("mongoose");

const postPropertySchema = new mongoose.Schema({
  iam: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  propertyfor: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  propertytype: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  floors: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ratepersqft: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // image: {
  //   data: Buffer,
  //   contentType: String,

  // },
});

const Property = new mongoose.model("postProperties", postPropertySchema);
module.exports = Property;
