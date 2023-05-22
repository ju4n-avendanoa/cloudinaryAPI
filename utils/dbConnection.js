import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error(error);
  }
}

export default dbConnect;
