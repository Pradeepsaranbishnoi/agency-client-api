const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const agencyClientRoutes = require('./routes/agencyClientRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

connectDB();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route for authentication and agency-client apis
app.use('/api', authRoutes);
app.use('/api', agencyClientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));