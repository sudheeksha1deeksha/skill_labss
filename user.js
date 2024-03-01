const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  role: { type: String, enum: ['user', 'admin', 'superuser'], default: 'user' },
  // Add other fields as needed
});

module.exports = mongoose.model('User', userSchema);
