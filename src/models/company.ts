import { Schema, model } from 'mongoose';
import { ICompanyData } from '../types';

interface ICompany extends ICompanyData {}

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
