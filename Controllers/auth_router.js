var auth_manager = require('../Adapters/auth_manager');

module.exports = (app) => {

    app.all('*', (req, res, next) => {
        const auth = new auth_manager();

        if (!auth.Authenticate(req.cookies)) {
            return res.status(403).send('Falha na Autenticação.');
            //Redirecionar?
        }

        //Necessário? Acredito que qualquer usuário já logado possui autorização total
        else if (!auth.Authorization(req.cookies, req.path, req.method)) {
            return res.status(401).send('Não Autorizado.');
        }

        return next();
    });
}