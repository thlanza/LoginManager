const mongo = require('../Db/mongo');

class ServiceDataBaseManager {

    constructor() {
        this._conexaoDb = mongo;
    }

    async listServices() {
        const json = [];
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Service');
                await collection.find().forEach(a => json.push(a));
            });
        return json;
    }

    getServiceById(id) {
        //return object 'Service'
    }

    searchServiceByName(name) {
        //return boolean
    }

    searchServiceByDomain(domain) {
        //return boolean
    }

    searchServiceById(id) {
        //return boolean
    }

    getServiceIdBySecret(secret) {
        //return 'Id' from object 'Service'
    }

    async addService(name, domain) {
        const body = { name, domain };
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Service');
                await collection.insertOne(body);
            });
        const msg = "Serviço incluido com sucesso";
        return msg;
    }

    removeService(id) {

    }

    editService(id, name, domain) {

    }
}

module.exports = ServiceDataBaseManager;