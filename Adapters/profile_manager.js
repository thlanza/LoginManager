const service_db_manager = require('../DataBaseAdapters/service_db_manager');
const serviceManager = require('../Adapters/service_manager');
class ProfileManager {

    constructor() {
        this.service_db = new service_db_manager();
    }

    getProfile(obj) {

        if (this.service_db.searchServiceById(obj.idService)) {
            throw new Error('Não é possivel realizar operação! code:1111');
        }

        try {
            var profile = this.service_db.getProfileById(obj.idService, obj.idProfile);

            if (profile == undefined) {
                throw new Error('Perfil não encontrado.')
            } else {
                return profile;
            }
        } catch (error) {
            throw new Error('Perfil não encontrado.')
        }
    }

    addProfile(obj) {

        if (this.service_db.searchServiceById(obj.idService)) {
            throw new Error('Não é possivel realizar operação! code:1111');
        }

        if (this.service_db.searchProfileByName(obj.name, obj.idService)) {
            throw new Error('Perfil já existente');
        }

        try {
            var listProfile = this.service_db.addProfile(obj);
            return listProfile
        } catch (error) {
            throw new Error('Não foi possivel salvar perfil');
        }
    }
    updateProfile(obj) {

        if (this.service_db.searchServiceById(obj.idService)) {
            throw new Error('Não é possivel realizar operação! code:1111');
        }

        if (this.service_db.searchProfileById(obj.idService, obj.idProfile)) {
            throw new Error('Não é possivel realizar operação! code:1111');
        }

        try {
            var listProfile = this.service_db.updateProfile(obj)
            return listProfile;
        } catch (err) {
            throw new Error('Não foi possivel Alterar os dados do perfil');
        }

    }

    removeProfile(obj) {
        if (this.service_db.searchServiceById(obj.idService)) {
            throw new Error('Não é possivel realizar operação! code:1111');
        }

        if (this.service_db.searchProfileById(obj.idService, obj.idProfile)) {
            throw new Error('Não é possivel realizar operação! code:1111');
        }

        try {
            var listProfile = this.service_db.removeProfile(obj)
            return listProfile;
        } catch (err) {
            throw new Error('Não foi possivel perfil');
        }

    }


}

module.exports = ProfileManager;


/*


identificar o codeAsciis, somar mais 6, retornar letra da posicao gerada.ProfileManager
bloquear numeros e pontos para conversao


eua soyy 100 vkxiktz ul znk ynuzy eua tkbkx zgqk. cgetk mxkzfqe

you miss 100 percent of the shots you never take. Wayne Gretzky



*/