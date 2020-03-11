const mongoose = require("mongoose");
const db = require("../Db/mongo");

class UserDataBaseManager {
  constructor() {
    this._db = db;
    this._mongoose = mongoose;
    this._db.once("open", () =>
      console.log("Connected at User database success")
    );

    this._UsersSchema = new this._mongoose.Schema({
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      }
    });

    this._userCollection = mongoose.model("Users", this._UsersSchema);
  }

  searchUser() {
    //return boolean
  }

  searchUserById(id) {
    //return boolean
  }

  validateUser() { }

  async listUsers() {
    const json = await this._userCollection.find();
    return json;
  }

  getUserIdByEmail(email) {
    //return 'Id' from object 'User' using 'Email'
  }

  async getUserById(id) {
    const user = await this._userCollection.find();
    return user;
  }

  async addUser(login, passwd) {
    const userInstance = new this._userCollection({
      email: login,
      password: passwd
    });

    try {
      await userInstance.save()
      const msg = "usuário inserido com sucesso!"
      return msg
    } catch (err) {
      return console.error(err);
      // console.log(user.email + " mail inserted to Collection");
    };

    // const msg = login + " cadastratdo com sucesso";
    // console.log(msg)
    // return msg;
  }

  removeUser(id) { }

  editUser(id) { }
}

module.exports = UserDataBaseManager;
