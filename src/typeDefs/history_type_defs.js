const { gql } = require('apollo-server')

const historyTypeDefs = gql`
    type History {
        date: String!
        prescription: String!
        description: String!
    }

    input HistoryInput{
        date: String!
        prescription: String!
        description: String!
    }

    extend type Query{
        historyByPatient(id: Int!): [History]
    }

    extend type Mutation{
        createHistory(input: HistoryInput): History
        updateHistory(id: Int!, input: HistoryInput): History
        deleteHistory(id: Int!, cascade: false): Boolean
    }
`
module.exports = historyTypeDefs
