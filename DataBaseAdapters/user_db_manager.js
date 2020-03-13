const Users = require("../Db/user_model");

class UserDataBaseManager {

  async listUsers() {
    const msg = Users.find({});
    return msg;
  }

  getUserIdByEmail(email) {
    //return 'Id' from object 'User' using 'Email'
  }

  async getUserById(id) {
console.log(id)
    const userObject = await Users.findById(id, (err, user) => {

      if (err) {
        return erro;
      } else {
        return user.email;
      }
    });
    return userObject.email;

  }

  async addUser(body) {

    try {
      const newUser = new Users({
        name: body.name,
        acessos:{
          service: body.service,
          profile: body.profile
        },
        email: body.email,
        password: body.senha
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
