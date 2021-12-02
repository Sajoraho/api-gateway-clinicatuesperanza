const historyResolver = {
    Query: {
        patientById: async (_, { id }, { dataSources, userIdToken }) => {
            patientToken = (await dataSources.authAPI.getUser(userIdToken)).id
            if (id == patientToken)
                return await dataSources.authAPI.patientById(id)
            else return null
        }
    },

    Mutation: {
        createHistory: async (_, { id }, { dataSources, userIdToken }) => {
            patientToken = (await dataSources.authAPI.getUser(userIdToken)).id
            if (id == patientToken)
                return await dataSources.authAPI.createHistory(id)
            else return null
        }
    }
}

module.exports = historyResolver
