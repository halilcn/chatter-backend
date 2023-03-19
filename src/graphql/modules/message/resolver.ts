import Message from '../../../models/message';
import { IMessageInputData, IMessagesInputData } from '../../../types';
import errorCatcher from '../../../utils/errorCatcher';

export default {
  createMessage: errorCatcher(async ({ input }: { input: IMessageInputData }) => {
    const { text, channelId, consumerName, from } = input;

    const existChannelId = await Message.exists({ channelId });
    if (!existChannelId) {
      const consultantId = '12345'; // TODO:
      await Message.create({ channelId, consumerName, consultantId });
    }

    const { messages } = (await Message.findOne({ channelId }))?.toJSON();
    await Message.updateOne(
      { channelId },
      {
        messages: [
          ...messages,
          {
            text,
            from
          }
        ]
      }
    );
    const resMessage = (await Message.findOne({ channelId }))?.toJSON().messages[0];

    return { text: resMessage?.text, from: resMessage?.from, createdAt: resMessage?.createdAt };
  }),
  messages: errorCatcher(async ({ input }: { input: IMessagesInputData }) => {
    const { channelId } = input;

    const { messages, status } = (await Message.findOne({ channelId }))?.toJSON();

    return { messages, status };
  })
};
