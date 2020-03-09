const mongo = require('../Db/mongo');


class UserDataBaseManager {

    constructor() {
        this._conexaoDb = mongo;
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

    getUserById(id) {
        //return object 'User' using 'Id'
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