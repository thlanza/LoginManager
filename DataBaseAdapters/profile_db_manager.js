class ProfileDataBaseManager {

    constructor() {
        //Conecta no tabela/collection Profile
    }
    searchProfileForId(id) {
        //retorn obj 

        //Teste Renato


        try {
            return { name: "Administrador", id: 2, desc: "Controlador de sistema" }
        } catch (err) {
            throw new Error("não encontrado")
        }

    }
    searchProfile() {
        //return boolean
    }

    addProfile() {

    }

    removeProfile(id) {

    }

    editProfile(id) {

    }
}

module.exports = ProfileDataBaseManager;