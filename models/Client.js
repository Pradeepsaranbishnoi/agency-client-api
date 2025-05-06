const mongoose = require('mongoose');

// Define the schema for the Client collection
const ClientSchema = new mongoose.Schema({
  clientId: { type: String, required: true, unique: true }, // Unique identifier for the client
  agencyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Agency', // Reference to the Agency
    required: true 
  },
  name: { type: String, required: true },    // Client full
  email: { type: String, required: true },   // Client email id
  phoneNumber: { type: String, required: true }, // Client phone number
  totalBill: { type: Number, required: true } // Total bill
});

module.exports = mongoose.model('Client', ClientSchema);
