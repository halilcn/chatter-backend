import { GraphQLError } from 'graphql';
import { v4 as uuidv4 } from 'uuid';

import Company from '../../../models/company';
import { ICompanyData, ICompanyInputData } from '../../../types';
import errorCatcher from '../../../utils/errorCatcher';
import { BadRequest } from '../../../utils/errors';

export default {
  createCompany: async ({ input }: { input: ICompanyInputData }): Promise<ICompanyData> => {
    const { name } = input;
    const company = (await Company.create({ name, key: uuidv4() })).toJSON();

    return company;
  },
  companies: async () => {
    // TODO: response null problem
    await errorCatcher(async () => {
      throw new BadRequest();
      const companies = await Company.find({});

      return companies;
    });
  }
};
