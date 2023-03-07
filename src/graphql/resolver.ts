import companyResolver from './modules/company/resolver';
import consultantResolver from './modules/consultant/resolver';

export default {
  ...companyResolver,
  ...consultantResolver
};
