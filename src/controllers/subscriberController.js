// controllers/subscriberController.js
const Subscriber = require('../models/subscribers');

const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().select('-__v');
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSubscriberNames = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().select('-_id name subscribedChannel');
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSubscriberById = async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id).select('-__v');
        if (subscriber) {
          res.json(subscriber);
        } else {
          res.status(404).json({ message: 'Subscriber not found' });
        }
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
};

module.exports={getAllSubscribers,getSubscriberNames,getSubscriberById}