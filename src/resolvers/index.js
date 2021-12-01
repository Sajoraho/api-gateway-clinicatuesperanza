const patientResolver = require('./patient_resolver')
const historyResolver = require('./history_resolver')
const authResolver = require('./auth_resolver')
const lodash = require('lodash')
const resolvers = lodash.merge(patientResolver, historyResolver, authResolver)
module.exports = resolvers
