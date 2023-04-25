const mongoose = require("mongoose");

const newProjectGallarySchema = new mongoose.Schema({
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
    type: Number,
    required: true,
  },
  floors: {
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
  furnishedStatus: {
    type: String,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
  },
  PropertyAvailability: {
    type: String,
    required: true,
  },
});

const gallary = new mongoose.model("newProjectGallary", newProjectGallarySchema);
module.exports = gallary;
