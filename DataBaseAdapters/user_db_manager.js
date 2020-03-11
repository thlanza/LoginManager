const mongoose = require('mongoose');
const db = require('../Db/mongo');

class UserDataBaseManager {
    
    constructor() {
        this._db = db;
        this._mongoose = mongoose;
        this._db.once("open", () => console.log("Connected at User database success"));
        
        this._UsersSchema = new this._mongoose.Schema({
            name: String,
            email: String,
            password: String
        });
        
        this._userCollection = mongoose.model('Users', this._UsersSchema);
        
        // var body = {name: Joaquina};
    }

    searchUser() {
        //return boolean
    }

    searchUserById(id) {
        //return boolean
    }

    validateUser() {

    }

    // async listUsers() {
    //     const json = [];
    //     await this._conexaoDb(
    //         async (banco) => {
    //             const db = banco.db('SPGF');
    //             const collection = db.collection('Users');
    //             await collection.find().forEach(a => json.push(a));
    //         });
    //     return json;
    // }

    getUserIdByEmail(email) {
        //return 'Id' from object 'User' using 'Email'
    }

    // async getUserById(string) {
    //     const id = this._id(string)
    //     const json = [];
    //     await this._conexaoDb(
    //         async (banco) => {
    //             const db = banco.db('SPGF');
    //             const collection = db.collection('Users');
    //             await collection.find({ "_id": id }).forEach(a => json.push(a));
    //         });
    //     return json;
    // }

    // async addUser(login, passwd) {
    //     const body = { login, passwd };
    //     await this._conexaoDb(
    //         async (banco) => {
    //             const db = banco.db('SPGF');
    //             const collection = db.collection('Users');
    //             await collection.insertOne(body);
    //         });
    //     const msg = "usuario incluido com sucesso";
    //     return msg;
    // }
    
    addUser(login, passwd) { 
        const body = {login, passwd};
        const userInstance = new this._userCollection(body); //dados front
        const msg = "usuario incluido com sucesso";
        userInstance.save( (err) => {
            if (err) return console.error(err);
            return msg;
        });

    }



    removeUser(id) {

    }

    editUser(id) {

    }
}

module.exports = UserDataBaseManager;