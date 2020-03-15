// const mongo = require("../Db/mongo");

class ProfileDataBaseManager {
  constructor() {
    // this._conexaoDb = mongo;
  }
  searchProfileForId(id) {
    //retorn obj

    //Teste Renato

    try {
      return { name: "Administrador", id: 2, desc: "Controlador de sistema" };
    } catch (err) {
      throw new Error("não encontrado");
    }
  }
  searchProfile() {
    //return boolean
  }

  async addProfile(body) {

  }

  removeProfile(id) { }

}

module.exports = ProfileDataBaseManager;
