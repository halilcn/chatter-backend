import { Schema, model } from 'mongoose';

interface IConsultant {
  username: string;
  companyId: Schema.Types.ObjectId;
}

const consultantSchema = new Schema<IConsultant>({
  username: {
    type: String,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Company'
  }
});

export default model('Consultant', consultantSchema);
