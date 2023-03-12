export default `
type Consultant{
    companyKey: String
    username: String
}

type AuthToken{
    token: String
}

input CreateConsultantInputData { 
    companyKey: String
    username: String
 }

extend type Mutation {
    createConsultant(input:CreateConsultantInputData): Consultant
    createAuthToken(input:CreateConsultantInputData): AuthToken
 }
`

/*
extend type Query{
    companies: [Company!]!
}
*/