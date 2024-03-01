const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
// Add other user-related routes

module.exports = router;
