export default `
type Company{
    name: String
    key: String
}

extend type Query{
    companies: [Company!]!
}

input CreateCompanyInputData { 
    name: String
 }

type Mutation {
    createCompany(input:CreateCompanyInputData): Company!
 }
 `;
