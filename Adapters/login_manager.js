var token_db_manager = require('../DataBaseAdapters/token_db_manager');
var user_db_manager = require('../DataBaseAdapters/user_db_manager');

class Login{

    constructor(){
        this.token_db = new token_db_manager();
        this.user_db = new user_db_manager();
    }

    validarLogin(email, password){
        let user_id = this.user_db.getUserIdByEmail(email);

        if(!user_id || user_id === null){
            return false;
        }

        return true;
    }

    // ======== Login de outros Micro-Serviços ========
    validarLoginAPI(email, password, hash){
        if(!this.token_db.searchTokenByHash(hash)){
            return false;
        }

        if(!this.validarLogin(email, password)){
            return false;
        }

        this.token_db.validateToken(user_id);

        return true;
    }
}

module.exports = Login;