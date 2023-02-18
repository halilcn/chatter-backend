import { buildSchema } from 'graphql';

export default buildSchema(`
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
