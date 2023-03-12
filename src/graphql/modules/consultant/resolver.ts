import { IAuthToken, IConsultantInputData } from '../../../types';
import Consultant from '../../../models/consultant';
import errorCatcher from '../../../utils/errorCatcher';
import { BadRequest } from '../../../utils/errors';
import jwt from 'jsonwebtoken';

export default {
  createConsultant: errorCatcher(async ({ input }: { input: IConsultantInputData }) => {
    const { companyKey, username } = input;
    const existConsultant = await Consultant.exists({ username, companyKey });

    if (existConsultant) throw new BadRequest('Consultant is exists');

    return (await Consultant.create({ companyKey, username })).toJSON();
  }),
  createAuthToken: errorCatcher(async ({ input }: { input: IConsultantInputData }) => {
    const { companyKey, username } = input;
    const token = jwt.sign({ username, companyKey }, 'TEST_JWT_TOKEN');
    const consultant = (await Consultant.findOne({ username, companyKey }))?.toJSON();

    if (!consultant) throw new BadRequest('User is not found');

    await Consultant.updateOne({ username, companyKey }, { tokens: [...consultant.tokens, token] });

    return { token };
  }),
  deleteAuthToken: errorCatcher(async ({ input }: { input: IAuthToken }) => {
    const { token } = input;
    const consultant = (await Consultant.findOne({ tokens: { $in: [token] } }))?.toJSON();

    if (!consultant) throw new BadRequest('User is not found');

    await Consultant.updateOne(
      { username: consultant.username, companyKey: consultant.companyKey },
      { tokens: [...consultant.tokens.filter(consultantToken => consultantToken != token)] }
    );

    return { token };
  })
};
