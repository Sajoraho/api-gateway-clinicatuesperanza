const { gql } = require('apollo-server')
const patientTypeDefs = gql`
    type Patient {
        id: Int!
        name: String!
        telephone: String!
        age: Int!
        city: String!
        gender: String!
        marital_status: String!
    }

    input PatientInput {
        id: Int!
        name: String!
        telephone: String!
        age: Int!
        city: String!
        gender: String!
        marital_status: String!
    }

    type Query {
        patientById(id: Int!): Patient
    }
`
module.exports = patientTypeDefs
