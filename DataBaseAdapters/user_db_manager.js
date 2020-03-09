const mongo = require('../Db/mongo');
const id = require('../Db/id');


class UserDataBaseManager {

    constructor() {
        this._conexaoDb = mongo;
        this._id = id;
    }

    searchUser() {
        //return boolean
    }

    searchUserById(id) {
        //return boolean
    }

    validateUser() {

    }

    async listUsers() {
        const json = [];
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Users');
                await collection.find().forEach(a => json.push(a));
            });
        return json;
    }

    getUserIdByEmail(email) {
        //return 'Id' from object 'User' using 'Email'
    }

    async getUserById(string) {
        const id = this._id(string)
        const json = [];
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Users');
                await collection.find({ "_id": id }).forEach(a => json.push(a));
            });
        return json;
    }

    async addUser(login, passwd) {
        const body = { login, passwd };
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Users');
                await collection.insertOne(body);
            });
        const msg = "usuario incluido com sucesso";
        return msg;
    }

    removeUser(id) {

    }

    editUser(id) {

    }
}

module.exports = UserDataBaseManager;