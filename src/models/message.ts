import { Schema, model } from 'mongoose';

const Message = new Schema(
  {
    text: {
      type: String
    },
    from: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

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
    default: true,
    require: true
  },
  consumerName: {
    type: String,
    require: true
  },
  messages: {
    type: [Message],
    required: true,
    default: []
  }
});

export default model('Message', messageSchema);
