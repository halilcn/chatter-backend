import { v4 as uuidv4 } from 'uuid';
import Message from '../../../models/message';
import { IChatInputData, IMessageInputData, IMessagesInputData } from '../../../types';
import errorCatcher from '../../../utils/errorCatcher';
import { BadRequest, UnAuthorized } from '../../../utils/errors';
import { checkAuth } from '../../../utils/helper';

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
  startChat: errorCatcher(async ({ input }: { input: IChatInputData }, { auth }: { auth: object }) => {
    const { consumerName } = input;
    const consultant = checkAuth(auth);
    const channelId = `${consumerName}_${'TEST_name'}_${uuidv4()}`;

    await Message.create({ channelId, consumerName, consultantId: consultant?._id });

    return { channelId };
  }),
  messages: errorCatcher(async ({ input }: { input: IMessagesInputData }) => {
    // TODO: for example, if an user who is a consultant want to more information about customer, how can we provide the additional information?
    const { channelId } = input;

    const { messages, status } = (await Message.findOne({ channelId }))?.toJSON();

    return { messages, status };
  })
};
