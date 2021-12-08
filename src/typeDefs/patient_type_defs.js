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

    type Mutation {
        createPatient(input: PatientInput): Patient
        updatePatient(id: Int!, input: PatientInput): Patient
       # deletePatient(id: Int!): Patient
    }
`
module.exports = patientTypeDefs
