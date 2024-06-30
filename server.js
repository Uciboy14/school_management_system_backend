const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to the database

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.Port || 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
})