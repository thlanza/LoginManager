var db_manager = require('../Adapters/data-base_manager');

class Login{

    constructor(){
        this.db = new db_manager();
    }

    validarLogin(user, password){
        
    }

    gerarJWT(){
        
    }
}

module.exports = Login;