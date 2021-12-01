//Se llama al typedef (esquema) de cada submodulo
const patientTypeDefs = require('./patient_type_defs')
const historyTypeDefs = require('./history_type_defs')
const authTypeDefs = require('./auth_type_defs')
//Se unen
const schemasArrays = [authTypeDefs, patientTypeDefs, historyTypeDefs]
//Se exportan
module.exports = schemasArrays
