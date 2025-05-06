const Agency = require('../models/Agency');
const Client = require('../models/Client');

// Create both an agency and a client in one request
exports.createAgencyClient = async (req, res) => {
  try {
    const { agency, client } = req.body;

    const newAgency = new Agency(agency);
    const savedAgency = await newAgency.save();

    const newClient = new Client({ ...client, agencyId: savedAgency._id });
    const savedClient = await newClient.save();

    res.status(201).json({ agency: savedAgency, client: savedClient });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing client by clientId
exports.updateClient = async (req, res) => {
  try {
    const updated = await Client.findOneAndUpdate(
      { clientId: req.params.clientId },
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Client not found' });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get the client with the highest total bill
exports.getTopClient = async (req, res) => {
  try {
    const top = await Client.find().sort({ totalBill: -1 }).limit(1).populate('agencyId');

    if (!top.length) return res.status(404).json({ message: 'No client found' });

    const { name: clientName, totalBill, agencyId } = top[0];
    res.json({ agencyName: agencyId.name, clientName, totalBill });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
