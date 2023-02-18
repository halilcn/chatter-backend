import { Schema, model } from 'mongoose';

interface ICompany {
  key: string;
  name: string;
}
const companySchema = new Schema<ICompany>({
  key: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default model('Company', companySchema);
