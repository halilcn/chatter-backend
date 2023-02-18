import { v4 as uuidv4 } from 'uuid';

import Company from '../models/company';
import Product from '../models/product';

export default {
  createProduct: async function ({ productInput }: { productInput: any }) {
    console.log('created product');
    console.log('productInput', productInput);

    await Product.create({ name: 'test12' });

    return {
      name: 'test okay',
      _id: 1212
    };
  },
  products: async function () {
    return {
      products: [{ name: 'test' }, { name: 'test1231' }]
    };
  },
  createCompany: async ({ name }: { name: any }) => {
    const company = await Company.create({ name, key: uuidv4() });

    return {
      name: company.name,
      key: company.key
    };
  }
};
