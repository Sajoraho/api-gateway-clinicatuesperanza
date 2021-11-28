const { gql } = require('apollo-server')

const historyTypeDefs = gql`
    type History {
        date: String!
        prescription: String!
        description: String!
    }
`
module.exports = historyTypeDefs
