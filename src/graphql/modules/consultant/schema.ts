export default `
type Consultant{
    companyId: String
    username: String
}


input CreateConsultantInputData { 
    companyId: String
    username: String
 }

extend type Mutation {
    createConsultant(input:CreateConsultantInputData): Consultant
 }
`

/*
extend type Query{
    companies: [Company!]!
}
*/