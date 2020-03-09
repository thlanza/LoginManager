const mongo = require('../Db/mongo');

class ProfileDataBaseManager {

    constructor() {
        this._conexaoDb = mongo;
    }

    searchProfile() {
        //return boolean
    }

    addProfile(body) {
        await this._conexaoDb(
            async (banco) => {
                const db = banco.db('SPGF');
                const collection = db.collection('Profile');
                await collection.insertOne(body);
            });
        const msg = "Profile incluído com sucesso";
        return msg;
    }

    removeProfile(id) {

    }

    editProfile(id) {

    }
}

module.exports = ProfileDataBaseManager;