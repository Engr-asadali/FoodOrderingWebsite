const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders (admin only)
router.get('/', orderController.getAllOrders);

module.exports = router;