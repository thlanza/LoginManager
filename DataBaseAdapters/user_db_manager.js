const Users = require("../Db/user_model");

class UserDataBaseManager {

  async listUsers() {
    const msg = Users.find({});
    return msg;
  }

  async getUserIdByEmail(mail) {
    const user = await Users.find({email: mail}, (err, user) => {
      if (err) {
        return err;
      } else {
        return user;
      }
    });
    return user[0].id;
  }

  async getUserById(id) {
    const userObject = await Users.findById(id, (err, user) => {
      if (err) {
        return err;
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
        acessos: {
          service: body.service,
          profile: body.profile
        },
        email: body.email,
        password: body.password
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
