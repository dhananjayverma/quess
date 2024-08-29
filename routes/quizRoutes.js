const express = require('express');
const {
  createQuiz,
  getActiveQuiz,
  getQuizResult,
  getAllQuizzes
} = require('../controllers/quizController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/quizzes', protect, createQuiz);
router.get('/quizzes/active', protect, getActiveQuiz);
router.get('/quizzes/:id/result', protect, getQuizResult);
router.get('/quizzes/all', protect, getAllQuizzes);

module.exports = router;
