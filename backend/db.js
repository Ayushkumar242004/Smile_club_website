const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ayukumar242004:d3iTfclVmaMfYsxc@cluster0.0tbxd8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log('✅ MongoDB Connected...');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
