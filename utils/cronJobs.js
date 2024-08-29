const cron = require('cron');
const Quiz = require('../models/Quiz');

const updateQuizStatus = async () => {
  const now = new Date();

  await Quiz.updateMany(
    { startDate: { $lte: now }, endDate: { $gte: now }, status: 'upcoming' },
    { status: 'active' }
  );

  await Quiz.updateMany(
    { endDate: { $lte: now }, status: 'active' },
    { status: 'finished' }
  );
};

new cron.CronJob('*/1 * * * *', updateQuizStatus, null, true, 'America/Los_Angeles');
