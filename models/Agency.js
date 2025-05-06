const mongoose = require('mongoose');

// Define the schema for the Agency collection
const AgencySchema = new mongoose.Schema({
  agencyId: { type: String, required: true, unique: true }, // Custom agency identifier
  name: { type: String, required: true },                   // Name of the agency
  address1: { type: String, required: true },               // Primary address
  address2: { type: String },                               // Secondary address is optional
  state: { type: String, required: true },                  // State name
  city: { type: String, required: true },                   // City name
  phoneNumber: { type: String, required: true }             // Contact number
});

module.exports = mongoose.model('Agency', AgencySchema);
