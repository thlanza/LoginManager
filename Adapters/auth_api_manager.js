var service_db_manager = require('../DataBaseAdapters/service_db_manager');
var token_db_manager = require('../DataBaseAdapters/token_db_manager');
var user_db_manager = require('../DataBaseAdapters/user_db_manager');

class AuthAPIManager{

    constructor(){
        this.service_db = new service_db_manager();
        this.token_db = new token_db_manager();
        this.user_db = new user_db_manager();
    }

    generateHash(secret){
        let service_id = this.service_db.getServiceIdBySecret(secret);

        //gerar Hash
        let hash = '';

        //Salvar Hash+service_id na tabela de Tokens
        //await this.token_db.addToken(service.name, hash);

        return hash;
    }

    checkToken(secret, hash){
        // ========== ATENÇÃO A VALIDAÇÕES =======
        let service_id = this.service_db.getServiceIdBySecret(secret);

        if(!service_id || service_id === null){
            return null;
        }

        if(!this.token_db.searchTokenByHash(hash)){
            return null;
        }

        let user_id = this.user_db.getUserIdByTokenHash(hash);

        if(!user_id || user_id === null){
            return null;
        }

        //gerar JWT
    }
}

module.exports = AuthAPIManager;