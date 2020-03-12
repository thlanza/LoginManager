const Users = require("../Db/user_model");

class UserDataBaseManager {
  searchUser() {
    //return boolean
  }

  async searchUserById(id) {
    const x = await this.getUserById(id);
    if (x) return true;
    else return false;
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

    const userObject = await Users.findById(id, (err, user) => {

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
