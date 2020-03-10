const mongo = require('../Db/mongo');

class ServiceDataBaseManager {

    constructor() {
        this._conexaoDb = mongo;
    }


    //funções que o profile manager vai precisar
    searchProfileByName(nameProfile, idservice) {


        //return boolean
    }
    getProfileById(idservice, idProfile) {


        //return obj Profile
    }

    addProfile(obj) {
        //obj.name, obj.describe,obj.idService

        //return listProfile
    }
    updateProfile(obj) {
        //obj.name, obj.describe,obj.idService

        //return listProfile
    }
    searchProfileById(idservice, idProfile) {

        //return boolean
    }
    removeProfile(idService, idProfile) {

        //return listProfile
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

    async getServiceById(string) {
        const id = this._id(string)
        const json = [];
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Service');
                await collection.find({ "_id": id }).forEach(a => json.push(a));
            });
        return json;
    }

    searchServiceByName(name) {
        //return boolean
    }

    searchServiceByDomain(domain) {
        //return boolean
    }

    searchServiceById(id) {
        return false
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