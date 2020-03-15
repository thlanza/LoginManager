const mongoose = require("mongoose");
const Users = require("../Db/user_model");
const bcrypt = require("bcryptjs");

class UserDataBaseManager {

  async validId(id) {
    const isValid = await mongoose.Types.ObjectId.isValid(id);
    return isValid;
  }
  async existId(id) {
    const cont = await Users.countDocuments({ _id: id }, function(err, count) {
      if (count > 0) console.log(count);
    });
    return cont;
  }
  async listUsers() {
    const msg = Users.find({});
    return msg;
  }
  async getUserIdByEmail(mail) {
    const user = await Users.find({ email: mail }, (err, user) => {
      if (err) {
        return err;
      } else {
        return user;
      }
    });
    return user[0].id;
  }
  async getUserById(id) {
    if ((await this.validId(id)) == false) {
      const msg = "id invalido";
      return msg;
    }

    if ((await this.existId(id)) <= 0) {
      const msg = "id nao existente no banco";
      return msg;
    } else {
      const userObject = await Users.findById(id, (err, user) => {
        if (err) {
          console.log(err);
          return err;
        } else {
          return user.email;
        }
      });
      return userObject.email;
    }
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
  async removeUser(id) {
    if ((await this.validId(id)) == false) {
      const msg = "id invalido";
      return msg;
    }
    if ((await this.existId(id)) <= 0) {
      const msg = "id nao existente no banco";
      return msg;
    } else {
      await Users.findOneAndRemove({ _id: id }, err => {
        if (err) {
          console.log(err);
          return err;
        }
      });
      const msg = "Deletado";
      console.log(msg);
      return msg;
    }
  }

  editUser(id) {}
}

module.exports = UserDataBaseManager;
