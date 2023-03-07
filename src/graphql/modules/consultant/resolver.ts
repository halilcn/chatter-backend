import { IConsultantInputData } from '../../../types';
import Consultant from '../../../models/consultant';

export default {
  createConsultant: async ({ input }: { input: IConsultantInputData }): Promise<IConsultantInputData|> => {
    const { companyId, username } = input;
    const isExistConsultant = await Consultant.exists({ username, companyId });
    if (!isExistConsultant) {
        const consultant = (await Consultant.create({ companyId, username })).toJSON();

        return consultant;
    }

    const consultant = (await Consultant.create({ companyId, username })).toJSON();

    return consultant;
  }
};
