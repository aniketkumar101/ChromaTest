const mongoose = require('mongoose');

const NumberTestSchema = new mongoose.Schema({
  correctAnswer: {
    type: String,
    required: true
  },
  userAnswer: {
    type: String,
    required: true
  },
  result: {
    type: String,
    enum: ['Correct', 'Incorrect'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('numbertest', NumberTestSchema);
