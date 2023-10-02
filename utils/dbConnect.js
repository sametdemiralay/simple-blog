import mongoose from 'mongoose';

const dbConnect = async () => {
  // connetion is has already been established, do not anything
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
