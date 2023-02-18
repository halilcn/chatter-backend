import { Schema, model } from 'mongoose';

interface IUser {
  username: string;
  companyId: Schema.Types.ObjectId;
}
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Company'
  }
  // TODO: google auth user unique key ?
});

export default model('User', userSchema);
