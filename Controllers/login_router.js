// var login_manager = require('../Adapters/login_manager');
// var validate = require('../Validators/login_validator');

const validator = require('../Validators/login_validator');
const Login_manager = require('../Adapters/login_manager');
// const bcrypt = require("bcryptjs");
const UserDataBaseManager = require("../DataBaseAdapters/user_db_manager")

module.exports = (app) => {
    // ================  NGINX WILL HANDLE THIS ===============
    // app.get('/Login', (req, res) => {
    //     
    // });

    // app.post('/Login', validate.post, (req, res) =>{
    //     var login = new login_manager();
    //     try{
    //         let success = login.validarLogin(req.body);
    //         if(success === true){

    //         }
    //         else{

    //         }
    //     }
    //     catch(e){
    //         return res.status(500).send(e);
    //     }
    // });

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

    app.get("/adduser", (req, resp) => {

        resp.send(`
        <html>
        <body>
        <center><br><br><br>
        <h1> Auth AddUser teste </h1>
        <form class="form" action="/adduser" method="post">
        <div class="formulario">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" placeholder="insira o login" />
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

    app.get("/listuser", async (req, resp) => {
        const loginManager = new Login_manager();
        const msg = await loginManager.listUsers();
        return resp.send(msg);
    });

    app.post('/login', validator.post, async (req, res) => {

        const hash = await bcrypt.hash(req.body.senha, 10);
        const loginManager = new Login_manager();
        const msg = await loginManager.validarLogin(req.body.email, hash);
        return res.send(msg)

    });

    app.post('/Login/:hash', validator.postAPI, (req, res) => {
        var login = new login_manager();
        try {
            let success = login.validarLoginAPI(req.body, req.params.hash);
            if (success === true) {
                return res.send('Sucesso.') //O Front deverá redirecionar o usuário para o serviço que o chamou
            }
            else {
                return res.status(401).send();
            }
        }
        catch (e) {
            return res.status(500).send(e);
        }
    });

    app.post('/adduser', validator.post, async (req, res) => {

        const hash = await bcrypt.hash(req.body.senha, 10);
        // const loginManager = new Login_manager();
        // const msg = await loginManager.addUser(req.body.email, hash);
        // return res.send(msg);

        const _UserDataBaseManager = new UserDataBaseManager();
        const msg = await _UserDataBaseManager.addUser(req.body.email, hash)
        return res.send(msg)
    });


    // app.get("/listid", async (req, resp) => {
    //     const _UserDataBaseManager = new UserDataBaseManager();
    //     const msg = await _UserDataBaseManager.getUserById("5e68d9cf8f837e0de8781dce");
    //     return resp.send(msg);
    // });

}