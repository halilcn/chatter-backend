import { v4 as uuidv4 } from 'uuid';
import Message from '../../../models/message';
import { IChatInputData, IMessageInputData, IMessagesInputData } from '../../../types';
import errorCatcher from '../../../utils/errorCatcher';
import { BadRequest, UnAuthorized } from '../../../utils/errors';

// TODO: we have to examine the status for guest user and consultant user.

export default {
  createMessage: errorCatcher(async ({ input }: { input: IMessageInputData }) => {
    const { text, channelId, from } = input;

    const existChannelId = await Message.exists({ channelId });
    if (!existChannelId) throw new BadRequest('The channel id is not exist');

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
  startChat: errorCatcher(async ({ input }: { input: IChatInputData }) => {
    const { consumerName } = input;
    const consultantId = '12345';
    const channelId = `${consumerName}_${'TEST_name'}_${uuidv4()}`;

    // TODO: if the user is not consultant, the user can't start a new conversation
    if (!consultantId) throw new UnAuthorized();

    await Message.create({ channelId, consumerName, consultantId });

    return { channelId };
  }),
  messages: errorCatcher(async ({ input }: { input: IMessagesInputData }) => {
    // TODO: for example, if an user who is a consultant want to more information about customer, how can we provide the additional information?
    const { channelId } = input;

    const { messages, status } = (await Message.findOne({ channelId }))?.toJSON();

    return { messages, status };
  })
};
