const { RESTDataSource } = require('apollo-datasource-rest')
const serverConfig = require('../server')
class ClinicaAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = serverConfig.clinica_api_url
    }

    async createPatient(patient) {
        patient = new Object(JSON.parse(JSON.stringify(patient)))
        return await this.post('/patient', patient)
    }

    async patienById(id) {
        return await this.get(`/patient/${id}`)
    }

    async updatePatient(patient) {
        patient = new Object(JSON.parse(JSON.stringify(patient)))
        return await this.put(`/patient/${id}`, patient)
    }

    async deletePatient(patient) {
        return await this.delete(`/patient/${id}`, patient)
    }
}

module.exports = ClinicaAPI
