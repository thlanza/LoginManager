const Users = require("../Db/user_model");

class UserDataBaseManager {
  searchUser() {
    //return boolean
  }

  searchUserById(id) {
    //return boolean
  }

  validateUser() { }

  async listUsers() {
    const msg = Users.find({});
    return msg;
  }

  getUserIdByEmail(email) {
    //return 'Id' from object 'User' using 'Email'
  }

  async getUserById(id) {

    var userObject = await Users.findById(id, (err, user) => {

      if (err) {
        return erro;
      } else {
        return user.email;
      }
    });
    return userObject.email;

  }

  async addUser(login, passwd) {
    try {
      const newUser = new Users({
        email: login,
        password: passwd
      });
      await newUser.save();
      const msg = `Usuário incluido com sucesso`;
      return msg;
    } catch (err) {
      return console.log(err);
    }
  }

  removeUser(id) { }

  editUser(id) { }
}

module.exports = UserDataBaseManager;
