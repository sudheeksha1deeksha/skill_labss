const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/order.controller');

router.post('/place-order', OrderController.placeOrder);
// Add other order-related routes

module.exports = router;
