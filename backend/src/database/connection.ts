import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  throw new Error('DB_URI is not defined');
}

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(`DB Connection Error: ${err}`);
  });
