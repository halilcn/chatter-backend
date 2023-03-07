import { Schema, model } from 'mongoose';

interface IConsultant {
  username: string;
  companyId: string;
}

const consultantSchema = new Schema<IConsultant>({
  username: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
    required: true,
    ref: 'Company'
  }
});

export default model('Consultant', consultantSchema);
