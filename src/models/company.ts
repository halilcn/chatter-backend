import { Schema, model } from 'mongoose';

interface ICompany {
  api_key: string;
  name: string;
}
const companySchema = new Schema<ICompany>({
  api_key: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default model('Company', companySchema);
