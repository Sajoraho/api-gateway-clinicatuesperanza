const patientResolver = {
    Query: {
        patientById: async (_, { id }, { dataSources, userIdToken }) => {
            patientToken = (await dataSources.authAPI.getUser(userIdToken)).id
            if (id == patientToken)
                return await dataSources.authAPI.patientById(id)
            else return null
        }
    },

    Mutation: {
        createPatient: async (_, { id }, { dataSources, userIdToken }) => {
            patientToken = (await dataSources.authAPI.getUser(userIdToken)).id
            if (id == patientToken)
                return await dataSources.authAPI.createPatient(id)
            else return null
        }
    }
}

module.exports = patientResolver
