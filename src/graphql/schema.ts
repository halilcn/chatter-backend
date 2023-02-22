import { buildSchema } from 'graphql';

export default buildSchema(`
    type Company{
        name: String
        key: String
    }

    input CompanyInputData { 
        name: String
     }
 
    type RootMutation {
       createCompany(companyInputData:CompanyInputData): Company!
    }
    type CompanyData{
        companies: [Company!]!
    }
    
    type RootQuery {
        companyCollection: CompanyData!
    }
    
   schema {
       query: RootQuery
       mutation: RootMutation
   }
`);
