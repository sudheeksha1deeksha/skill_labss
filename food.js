const mongoose = require('mongoose');
const Food = require('./food');

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: { type: String, enum: ['veg', 'non-veg', 'dessert'] },
  // Add other fields as needed
});

module.exports = mongoose.model('Food', foodSchema);
