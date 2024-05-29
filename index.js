// index.js
const express = require('express');
const subscriberRoutes = require('./src/routes/subscriberRoutes');
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path")

// Middleware
app.use(express.json());

// Routes
app.use('/subscribers', subscriberRoutes);

const staticPath = path.join(__dirname,"./public")

app.use("/",express.static(staticPath))

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000, });

mongoose.connection.on('connected', async () => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});



