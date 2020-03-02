var db_manager = require('../Adapters/data-base_manager');

class AuthManager{

    constructor(){
        this.db = new db_manager();
    }

    generateHash(userId){

    }

    validateToken(token){

    }
}

module.exports = AuthManager;