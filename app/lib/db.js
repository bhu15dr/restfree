// lib/db.js
import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to the database.");
    return; // Skip if already connected
  }

  console.log("Connecting to MongoDB...");
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'restfree',  // Ensure you are connecting to the "userdata" database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection successful!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDb;
