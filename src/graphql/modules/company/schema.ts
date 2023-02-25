export default `
type Company{
    name: String
    key: String
}

input CompanyInputData { 
    name: String
 }


type CompanyData{
    companies: [Company!]!
}

extend type Query{
    companyCollection: CompanyData!
}

type Mutation {
    createCompany(companyInputData:CompanyInputData): Company!
 }
 `;
