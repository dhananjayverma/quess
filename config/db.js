const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // New URL parser to handle connection strings
      useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
      serverSelectionTimeoutMS: 30000, // 30 seconds for server selection timeout
      socketTimeoutMS: 45000 // 45 seconds for socket timeout
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

