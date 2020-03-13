const Users = require("../Db/user_model");
const bcrypt = require("bcryptjs");

class UserDataBaseManager {
  async listUsers() {
    const msg = Users.find({});
    return msg;
  }

  getUserIdByEmail(email) {
    //return 'Id' from object 'User' using 'Email'
  }

  async getUserById(id) {
    // const userObject = await

    Users.findById(id, (err, user) => {
      console.log(user);

      if (err) {
        console.log(err);
        return err;
      } else {
        return user.email;
      }
    });
    // return userObject.email;
  }

  async addUser(body) {
    try {
      let hash = await bcrypt.hash(body.password, 10);
      const newUser = new Users({
        name: body.name,
        acessos: {
          service: body.service,
          profile: body.profile
        },
        email: body.email,
        password: hash
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
