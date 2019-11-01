const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
  make: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  model: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  year: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  description: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  image: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  material: {
    type: mongoose.Schema.Types.String
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;
