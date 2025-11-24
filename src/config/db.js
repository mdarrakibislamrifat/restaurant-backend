import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("DB connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }
};
