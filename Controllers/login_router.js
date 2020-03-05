// class LoginRouter{

//     constructor (app){
//         this.app = app;
//     }

//     app.get('/Login', (req, res) => {

//     });

//     Login(){

//     }

//     Logout(){

//     }
// }

var login_manager = require('../Adapters/login_manager');
var validate = require('../Validators/login_validator');

module.exports = (app) => {
    // ================  NGINX WILL HANDLE THIS ===============
    // app.get('/Login', (req, res) => {
    //     
    // });
    
    app.post('/Login', validate.post, (req, res) =>{
        var login = new login_manager();

        try{
            let success = login.validarLogin(req.body);
            if(success === true){
                
            }
            else{

            }
        }
        catch(e){
            return res.status(500).send(e);
        }
    });

    app.post('/Login/:hash', validate.postAPI, (req, res) =>{
        var login = new login_manager();

        try{
            let success = login.validarLoginAPI(req.body, req.params.hash);
            if(success === true){
                return res.send('Sucesso.') //O Front deverá redirecionar o usuário para o serviço que o chamou
            }
            else{
                return res.status(401).send();
            }
        }
        catch(e){
            return res.status(500).send(e);
        }
    });
}