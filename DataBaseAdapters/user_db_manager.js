const Users = require("../Db/user_model");

class UserDataBaseManager {
  searchUser() {
    //return boolean
  }

  searchUserById(id) {
    //return boolean
  }

  validateUser() {}

  async listUsers() {
    const msg = Users.find({});
    // const msg = Users.find({}, function(err, users) {
    //   const username = users.map(function(user) {
    //     return user.email;
    //   });
    //   return username;
    // });
    // console.log(msg)
    return msg;
  }

  getUserIdByEmail(email) {
    //return 'Id' from object 'User' using 'Email'
  }

  async getUserById(id) {
    //   console.log(id)
   Users.findById(id, (err, user) => {
      if (err) {
        return erro;
      } else {
        // console.log(user.email);
        return user.email;
      }
    });
    console.log(user)

    // const user = await this._userCollection.find();
    // return user;
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

  removeUser(id) {}

  editUser(id) {}
}

module.exports = UserDataBaseManager;
