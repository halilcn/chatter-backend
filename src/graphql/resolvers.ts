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
  }
};
