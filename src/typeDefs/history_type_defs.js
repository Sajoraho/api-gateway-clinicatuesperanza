const { gql } = require('apollo-server')

const historyTypeDefs = gql`
    type History {
        patientDocument: Int!
        date: String!
        prescription: String!
        description: String!
    }

    input HistoryInput {
        patientDocument: Int!
        date: String!
        prescription: String!
        description: String!
    }

    type Query {
        historyByPatient(patientDocument: Int!): History
    }

    type Mutation {
        createHistory(input: HistoryInput): History
        updateHistory(patientDocument: Int!, input: HistoryInput): History
        deleteHistory(patientDocument: Int!): Boolean
    }
`
module.exports = historyTypeDefs
