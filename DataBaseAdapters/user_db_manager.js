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

  validateUser() {}

  async listUsers() {
    const json = await this._userCollection.find();
    return json;
  }

  getUserIdByEmail(email) {
    //return 'Id' from object 'User' using 'Email'
  }

  async getUserById(id) {
    //   const json = [];
    console.log(await this._userCollection.find(id));
    //   .forEach(a => json.push(a)
    //   return json;
  }

  async addUser(login, passwd) {
    const userInstance = new this._userCollection({
      email: login,
      password: passwd
    });

    const msg = await userInstance.save(function(err, user) {
      if (err) {
        return console.error(err);
      } else {
        return user.email + " mail inserted to Collection";
      }
      // console.log(user.email + " mail inserted to Collection");
    });

    // const msg = login + " cadastratdo com sucesso";
    // console.log(msg)
    return msg;
  }

  removeUser(id) {}

  editUser(id) {}
}

module.exports = UserDataBaseManager;
