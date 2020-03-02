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

module.exports = (app) => {
    // ================  NGINX WILL HANDLE THIS ===============
    // app.get('/Login', (req, res) => {
    //     
    // });
    
    app.post('/Login', (req, res) =>{
        var login = new login_manager();
        login.validarLogin(req.body);
    });
}