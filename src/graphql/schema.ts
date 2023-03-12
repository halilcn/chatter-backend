import { buildSchema } from 'graphql';
import companySchema from './modules/company/schema';
import consultantSchema from './modules/consultant/schema';
import messageSchema from './modules/message/schema';

export default buildSchema(`
type Query{
    _empty: String
}
type Mutation{
    _empty: String
}

${companySchema}
${consultantSchema}
${messageSchema}
`);
