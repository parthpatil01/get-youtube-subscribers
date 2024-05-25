const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require('dotenv').config();

// Connect to DATABASE
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}

refreshAll()