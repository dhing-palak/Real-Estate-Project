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
  propertytype: {
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
    type: String,
    required: true,
  },
  floors: {
    type: String,
    required: true,
  },
  furnished: {
    type: String,
    required: true,
  },

  area: {
    type: Number,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  ratepersqft: {
    type: Number,
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
  amenitiesData: {
    type: Object,
    required: true,
  },
  // image: {
  //   data: Buffer,
  //   contentType: String,

  // },
});

const Property = new mongoose.model("postProperties", postPropertySchema);
module.exports = Property;
