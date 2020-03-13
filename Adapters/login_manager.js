// var token_db_manager = require('../DataBaseAdapters/token_db_manager');
var user_db_manager = require("../DataBaseAdapters/user_db_manager");
const Users = require("../Db/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

class Login {
  constructor() {
    // this.token_db = new token_db_manager();
    this.user_db = new user_db_manager();
  }

  async validarLogin(emailProcurado, passwdMandada) {
    const user = await Users.findOne({
      email: emailProcurado
    });
    if (!user) {
      return { msg: "No user" };
    }
    const password = await Users.findOne(
      {
        email: emailProcurado
      },
      { password: 1 }
    );

    let awaitedPasswd = await password.password.toString();

    console.log("senha mandada pelo usuário", passwdMandada);
    console.log("awaited Passwd", awaitedPasswd);
    if (!bcrypt.compareSync(passwdMandada, awaitedPasswd)) {
      return { msg: "Senha ou usuário estão incorretos" };
    }

    return { msg: "Usuário válido!" };
  }

  async gerarJWT(email) {
    const user = await Users.findOne({
      email: email
    });
    function gerarToken(params = {}) {
      return jwt.sign(params, process.env.SECRET, {
        expiresIn: 86400
      });
    }
    let token = gerarToken({ id: user._id });
    return token;
  }

  // validarLogin(email, password) {
  //     let user_id = this.user_db.getUserIdByEmail(email);
  //     if (!user_id || user_id === null) {
  //         return false;
  //     }
  //     return true;
  // }

  // ======== Login de outros Micro-Serviços ========
  // validarLoginAPI(email, password, hash) {
  //     if (!this.token_db.searchTokenByHash(hash)) {
  //         return false;
  //     }
  //     if (!this.validarLogin(email, password)) {
  //         return false;
  //     }
  //     this.token_db.validateToken(user_id);
  //     return true;
  // }

  // ======== teste chico ========
  async addUser(username, passwd) {
    const msg = await this.user_db.addUser(username, passwd);
    return msg;
  }

  // ======== teste chico ========
  async listUsers() {
    const msg = await this.user_db.listUsers();
    return msg;
  }
}

module.exports = Login;
