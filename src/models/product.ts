import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
}
const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true
  }
});
module.exports = model('Product', productSchema);
