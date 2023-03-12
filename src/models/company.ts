import { Schema, model } from 'mongoose';

const companySchema = new Schema(
  {
    key: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model('Company', companySchema);
