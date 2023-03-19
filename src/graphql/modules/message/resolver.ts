import Message from '../../../models/message';
import { IMessageInputData, IMessagesInputData } from '../../../types';
import errorCatcher from '../../../utils/errorCatcher';
import { UnAuthorized } from '../../../utils/errors';

export default {
  createMessage: errorCatcher(async ({ input }: { input: IMessageInputData }) => {
    const { text, channelId, consumerName, from } = input;

    const existChannelId = await Message.exists({ channelId });
    if (!existChannelId) {
      // TODO:if the user is consultant the user can start a conversation, if the user is not the user can't start it.
      // TODO:But creating unique channelIf on the backend is better, we have to focus it in the next days.
      const consultantId = '12345';
      if (!consultantId) throw new UnAuthorized();
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
    // TODO: for example, if an user who is a consultant want to more information about customer, how can we provide the additional information?
    const { channelId } = input;

    const { messages, status } = (await Message.findOne({ channelId }))?.toJSON();

    return { messages, status };
  })
};
