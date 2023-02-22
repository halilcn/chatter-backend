import { v4 as uuidv4 } from 'uuid';

import Company from '../../models/company';
import { ICompanyData, ICompanyInputData } from '../../types';

export default {
  createCompany: async ({ companyInputData }: { companyInputData: ICompanyInputData }): Promise<ICompanyData> => {
    const { name } = companyInputData;
    const company = (await Company.create({ name, key: uuidv4() })).toJSON();

    return company;
  },
  companyCollection: async () => {
    const companies = await Company.find({});

    return {
      companies
    };
  }
};
