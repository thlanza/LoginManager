var auth_api_manager = require('../Adapters/auth_api_manager');

module.exports = (app) => {

    app.get('/api/generateHash', (req, res) => {
        const auth = new auth_api_manager();
        
        try{
            let hash = auth.generateHash(req.body); //Expected 'secret'
            return res.send(hash);
        }
        catch(e){
            return res.status(500).send(e);
        }
    });

    app.get('/api/validateToken', (req, res) => {
        const auth = new auth_api_manager();

        try{
            let jwt = auth.checkToken(req.body); //Expected 'secret','hash'
            if(jwt && jwt !== ''){
                return res.send(jwt);
            }
            else{
                return res.status(403).send('Falha na Autenticação.');
            }
        }
        catch(e){
            return res.status(500).send(e);
        }
    });
}