import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect('mongodb://localhost:27017/chatter')
  .then(() => {
    console.log('connected');
  })
  .catch(err => {
    console.log('mongoose error');
    process.exit(1);
  });
