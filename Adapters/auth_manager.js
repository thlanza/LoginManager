const jwt = require('jsonwebtoken');

class AuthManager {

    constructor() {

    }

    Authenticate(cookie) {
        return true;
    }

    Authorization(cookie, path, method) {
        return true;
    }

    gerarJWT(){
        
    }
}

module.exports = AuthManager;