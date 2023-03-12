import { IConsultantInputData } from '../../../types';
import Consultant from '../../../models/consultant';
import errorCatcher from '../../../utils/errorCatcher';
import { BadRequest } from '../../../utils/errors';

export default {
  createConsultant: errorCatcher(async ({ input }: { input: IConsultantInputData }) => {
    const { companyId, username } = input;
    const existConsultant = await Consultant.exists({ username, companyId });

    if (existConsultant) throw new BadRequest('Consultant is exists');

    return (await Consultant.create({ companyId, username })).toJSON();
  })
};
