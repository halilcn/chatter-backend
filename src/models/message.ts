import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  consultantId: {
    type: String,
    required: true
  },
  channelId: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false,
    require: true
  },
  messages: {
    type: [Object],
    required: true,
    default: []
  }
});

export default model('Message', messageSchema);
