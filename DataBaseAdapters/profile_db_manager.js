const mongo = require("../Db/mongo");

class ProfileDataBaseManager {
  constructor() {
    this._conexaoDb = mongo;
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
    await this._conexaoDb(async banco => {
      const db = banco.db("SPGF");
      const collection = db.collection("Profile");
      await collection.insertOne(body);
    });
    const msg = "Profile incluído com sucesso";
    return msg;
  }

  removeProfile(id) {}

  //busca pelo id????
  async editProfile(string) {
    const id = this._id(string);
    const json = [];
    await this._conexaoDb(async banco => {
      const db = banco.db("SPGF");
      const collection = db.collection("Profile");
      await collection.find({ _id: id }).forEach(a => json.push(a));
    });
    return json;
  }
}

module.exports = ProfileDataBaseManager;
