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

input deleteAuthTokenInputData { 
    token: String
}

extend type Mutation {
    createConsultant(input:CreateConsultantInputData): Consultant
    createAuthToken(input:CreateConsultantInputData): AuthToken
    deleteAuthToken(input:deleteAuthTokenInputData): AuthToken
 }
`

/*
extend type Query{
    companies: [Company!]!
}
*/