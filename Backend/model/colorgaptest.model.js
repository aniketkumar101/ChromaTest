const mongoose = require('mongoose');

const ColorgapTestSchema = new mongoose.Schema({
  testType: {
    type: String,
    required: true
  },
  correct: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  result: {
    type: String,
    enum: ['PASS', 'FAIL'],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('colorgaptest', ColorgapTestSchema);
