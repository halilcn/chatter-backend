import { Schema, model } from 'mongoose';

interface ICompany {
  name: string;
  key: string;
}

const companySchema = new Schema<ICompany>(
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
