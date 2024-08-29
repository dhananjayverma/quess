const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  rightAnswer: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['inactive', 'active', 'finished'], // Add 'inactive' and other valid statuses here
    default: 'inactive' // Set default status to 'inactive'
  }
});

module.exports = mongoose.model('Quiz', quizSchema);
