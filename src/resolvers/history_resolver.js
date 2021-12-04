const historyResolver = {
    Query: {
        historyByPatient: async (
            _,
            { patientDocument },
            { dataSources, userIdToken }
        ) => {
            patientToken = (await dataSources.authAPI.getUser(userIdToken)).id
            if (patientDocument == patientToken)
                return await dataSources.authAPI.historyByPatient(
                    patientDocument
                )
            else return null
        }
    },

    Mutation: {
        createHistory: async (
            _,
            { patientDocument },
            { dataSources, userIdToken }
        ) => {
            patientToken = (await dataSources.authAPI.getUser(userIdToken)).id
            if (patientDocument == patientToken)
                return await dataSources.authAPI.createHistory(patientDocument)
            else return null
        }
    }
}

module.exports = historyResolver
