var profile_db_manager = require('../DataBaseAdapters/profile_db_manager');

class ProfileManager {

    constructor() {
        this.profile_db = new profile_db_manager();
    }

    listProfile() {

    }

    getProfile(id) {


        try {
            var profile = this.profile_db.searchProfileForId(id);
            return profile;

        } catch (error) {
            throw new Error('Perfil não encontrado.')
        }
    }

    addProfile(obj) {
        if (this.profile_db.searchProfile(obj)) {
            throw new Error('Perfil já existente')
        }

        try {
            var listProfile = this.profile_db.addProfile(obj);
            return listProfile
        } catch (error) {
            throw new Error('Não foi possivel salvar perfil');
        }
    }

    removeProfile(id) {

    }

    editProfile(id) {

    }
}

module.exports = ProfileManager;


/*


identificar o codeAsciis, somar mais 6, retornar letra da posicao gerada.ProfileManager
bloquear numeros e pontos para conversao


eua soyy 100 vkxiktz ul znk ynuzy eua tkbkx zgqk. cgetk mxkzfqe

you miss 100 percent of the shots you never take. Wayne Gretzky



*/