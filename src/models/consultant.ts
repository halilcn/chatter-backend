import { Schema, model } from 'mongoose';

const consultantSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  tokens: {
    type: [String],
    default: [],
    required: true
  },
  companyKey: {
    type: String,
    required: true
  }
});

export default model('Consultant', consultantSchema);
