export default `
type Company{
    name: String
    key: String
}

input CreateCompanyInputData { 
    name: String
 }

extend type Query{
    companies: [Company]
}

extend type Mutation {
    createCompany(input:CreateCompanyInputData): Company
 }
 `;
