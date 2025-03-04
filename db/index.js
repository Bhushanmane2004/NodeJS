import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    const instance = mongoose.connect(`${process.env.MONGODB_URL}/test`);
    console.log("Db connected");
  } catch (error) {
    console.log("failed to connect");
  }
};
export default ConnectDb;
