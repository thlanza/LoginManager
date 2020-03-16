const validator = require("../Validators/login_validator");
const Login_manager = require("../Adapters/login_manager");
const ProfileDataBaseManager = require("../DataBaseAdapters/profile_db_manager"); //teste chico nao mexer
const errorManager = require('../Error/Error_manager');

module.exports = app => {
  app.get("/", (req, resp) => {
    //NGINX entrega o front pro cliente

    resp.send(`
    <html>
    <body>
    <center><br><br><br>
    <h1> Auth Login </h1>
    <form class="form" action="/login" method="post">
    <div class="formulario">
    <label for="Email">Email</label>
    <input id="email" type="email" name="email" placeholder="insira o email" />
    </div>
    <div class="formulario">
    <label for="senha">Senha</label>
    <input id="senha" type="password" name="senha" placeholder="insira o senha"/>
    </div>
    <input type="submit" value="Enviar" />
    </form>
    </center>
    </body> 
    </html>
    `);
  });

  app.get("/listuser", async (req, res) => {
    const loginManager = new Login_manager();
    const msg = await loginManager.listUsers();
    return res.send(msg);
  });

  //tiago???? dois logins e pq nao ta usando o validador?
  app.post("/login", validator.post, async (req, res) => {
    const loginManager = new Login_manager();

    const msg = await loginManager.validarLogin(req.body.email, req.body.senha);

    if (msg.msg === "Usuário válido!") {
      return res.send(
        `<html>
          <body>
          <b>Logado!</b>
          <br>
          <form class="form" action="/gerarJWT" method="post">
          <div class="formulario">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" placeholder="insira o login" />
          </div>
          <input type="submit" value="Enviar" />
          </body>
          </html>`
      );
    } else {
      return errorManager.ErrorManager(
        403,
        "Usuário não válido"
      );
    }
  });

  app.post("/Login/:hash", validator.postAPI, (req, res) => {
    var login = new login_manager();
    try {
      let success = login.validarLoginAPI(req.body, req.params.hash);
      if (success === true) {
        return res.send("Sucesso."); //O Front deverá redirecionar o usuário para o serviço que o chamou
      } else {
        return res.status(401).send();
      }
    } catch (e) {
      return res.status(500).send(e);
    }
  });

  app.post("/gerarJwt", async (req, res) => {
    const loginManager = new Login_manager();
    try {
    const msg = await loginManager.gerarJWT(req.body.email);
    return res.send(msg);
    } catch(err){
      return errorManager.ErrorManager(
        403,
        err.toString() + "Não foi possível gerar JWT"
      )
    }
  });

  // app.post("/login", validator.post, async (req, res) => {
  //   const loginManager = new Login_manager();
  //   const msg = await loginManager.validarLogin(req.body);
  //   return res.send(msg);
  // });

  ////////// teste chico nao mexer /////////////
  app.post("/removeProfile", async (req, res) => {
    const _p = new ProfileDataBaseManager();
    const msg = await _p.removeProfile(req.body.id);
    return res.send(msg);
  });
  app.post("/addProfile", async (req, res) => {
    const _p = new ProfileDataBaseManager();
    const msg = await _p.addProfile(req.body);
    return res.send(msg);
  });
  app.get("/listProfile", async (req, res) => {
    const _p = new ProfileDataBaseManager();
    const msg = await _p.listProfile(req.body);
    return res.send(msg);
  });
  app.post("/getProfileByName", async (req, res) => {
    const _p = new ProfileDataBaseManager();
    const msg = await _p.getProfileByName(req.body.profile);
    return res.send(msg);
  });
};
