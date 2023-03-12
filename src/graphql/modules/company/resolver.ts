import { v4 as uuidv4 } from 'uuid';

import Company from '../../../models/company';
import { ICompanyData, ICompanyInputData } from '../../../types';
import errorCatcher from '../../../utils/errorCatcher';

export default {
  createCompany: errorCatcher(async ({ input }: { input: ICompanyInputData }) => {
    const { name } = input;
    const company = (await Company.create({ name, key: uuidv4() })).toJSON();

    return company;
  }),
  companies: errorCatcher(async () => {
    const companies = await Company.find({});

    return companies;
  })
};
