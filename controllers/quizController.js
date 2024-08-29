const Quiz = require('../models/Quiz');
const mongoose = require('mongoose');

// Create Quiz
exports.createQuiz = async (req, res) => {
  const { question, options, rightAnswer, startDate, endDate } = req.body;
  try {
    const quiz = await Quiz.create({ question, options, rightAnswer, startDate, endDate, status: 'inactive' });
    res.status(201).json({ success: true, data: quiz });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get Active Quiz
exports.getActiveQuiz = async (req, res) => {
  try {
    const now = new Date();
    console.log("Current Time:", now);

    const quiz = await Quiz.findOne({
      startDate: { $lte: now },
      endDate: { $gte: now },
      status: 'active' // Ensure your quiz documents have a status field
    });

    console.log("Active Quiz Found:", quiz);

    if (!quiz) {
      return res.status(404).json({ success: false, error: 'No active quiz found' });
    }

    res.status(200).json({ success: true, data: quiz });
  } catch (error) {
    console.error("Error in getActiveQuiz:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get Quiz Result
exports.getQuizResult = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("Quiz ID:", id);
    
    const quiz = await Quiz.findById(id);
    console.log("Quiz Found:", quiz);

    if (!quiz) {
      return res.status(404).json({ success: false, error: 'Quiz not found' });
    }

    const now = new Date();
    const resultAvailableTime = new Date(quiz.endDate).getTime() + 5 * 60 * 1000;
    console.log("Result Available Time:", new Date(resultAvailableTime));

    if (now < resultAvailableTime) {
      return res.status(400).json({ success: false, error: 'Result not available yet' });
    }

    res.status(200).json({ success: true, data: { correctAnswer: quiz.options[quiz.rightAnswer] } });
  } catch (error) {
    console.error("Error in getQuizResult:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get All Quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    console.log("All Quizzes Retrieved:", quizzes);

    res.status(200).json({ success: true, data: quizzes });
  } catch (error) {
    console.error("Error in getAllQuizzes:", error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};

