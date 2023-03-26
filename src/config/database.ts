import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const URI = process.env["MONGO_URI"]!;
    await mongoose.connect(URI, {});
  } catch (err) {
    console.log(err);
  }
  const connection = mongoose.connection;
  console.log("Connect DB success");
};
