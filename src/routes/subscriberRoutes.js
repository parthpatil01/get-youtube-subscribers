// routes/subscriberRoutes.js
const express = require('express');
const router = express.Router();
const {getAllSubscribers,getSubscriberNames,getSubscriberById} = require('../controllers/subscriberController');

router.get('/', getAllSubscribers);
router.get('/names', getSubscriberNames);
router.get('/:id', getSubscriberById);

module.exports = router;
