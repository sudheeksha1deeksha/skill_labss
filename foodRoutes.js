const express = require('express');
const router = express.Router();
const FoodController = require('../controllers/food.controller');

router.get('/list', FoodController.getFoodList);
// Add other food-related routes

module.exports = router;
