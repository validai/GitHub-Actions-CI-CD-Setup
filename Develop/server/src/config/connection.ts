import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: true 
};


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techquiz';

mongoose.connect(MONGODB_URI, options)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('MongoDB Connection Error:', err));

export default mongoose.connection;
