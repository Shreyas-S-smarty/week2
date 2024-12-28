const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Allow cross-origin requests
const dotenv = require('dotenv'); // Manage environment variables

dotenv.config(); // Load environment variables from .env file

// Import routes
const authRoutes = require('./routes/auth'); // Authentication routes
const deezerRoutes = require('./routes/deezer'); // Deezer API routes

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use('/auth', authRoutes); // Use authentication routes
app.use('/deezer', deezerRoutes); // Use Deezer API routes

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start server
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message); // Log connection errors
  });
