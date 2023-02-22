import { v4 as uuidv4 } from 'uuid';

import Company from '../models/company';
import { ICompany, ICompanyInputData } from '../types';

export default {
  createCompany: async ({ companyInputData }: { companyInputData: ICompanyInputData }): Promise<ICompany> => {
    const { name } = companyInputData;
    const company = await Company.create({ name, key: uuidv4() });

    return {
      name: company.name,
      key: company.key
    };
  },
  companies: async () => {
    const companies = await Company.find({});

    return {
      companies: []
    };
  }
};
