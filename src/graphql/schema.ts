import { buildSchema } from 'graphql';

export default buildSchema(`
    type Company{
        name: String
        key: String
    }

    input CompanyInputData { 
        name: String
     }
 
    
    type Product{
        name: String!
    }

   input ProductInputData { 
       name: String!
       description: String!
       price: Float!
       discount: Int
    }
    type RootMutation {
       createProduct(productInput:ProductInputData): Product!
       createCompany(CompanyInputData): Company!
    }
    type ProductData {
        products: [Product!]!
    }
    type RootQuery {
        products: ProductData!
    }
    
   schema {
       query: RootQuery
       mutation: RootMutation
   }
`);
