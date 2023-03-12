import companyResolver from './modules/company/resolver';
import consultantResolver from './modules/consultant/resolver';
import messageResolver from './modules/message/resolver';

export default {
  ...companyResolver,
  ...consultantResolver,
  ...messageResolver
};
