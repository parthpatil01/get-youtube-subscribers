// index.js
const express = require('express');
const subscriberRoutes = require('./src/routes/subscriberRoutes');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());

// Routes
app.use('/subscribers', subscriberRoutes);

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', async () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
