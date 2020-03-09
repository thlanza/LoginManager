function get(req, res, next) {
    //verify id profile
    req.checkParams('id', 'Perfil inválido.').notEmpty();
    req.checkParams('id', 'Perfil inválido.').isNumeric();
    const errors = req.validationErrors();

    if (errors) {
        var response = { errors: [] };
        errors.forEach(function (err) {
            response.errors.push(err.param + ': ' + err.msg);
        });

        return res.status(400).json(response);
    }

    return next();
}

function post(req, res, next) {
    //verify name profile to add new profile
    req.checkParams('name', 'Nome do Perfil é obrigatorio').notEmpty();
    req.checkParams('name', 'Nome do Perfil deve conter no maximo 30 caracteres').length({ max: 30 });

    //verify describe profile to new profile
    req.checkParams('describe', 'Descrição do Perfil é obritaria');
    req.checkParams('describe', 'Descrição deve conter no minimo 10 caracteres e no maximo 50').length({ min: 10, max: 50 });

    //verify idService
    req.checkParams('idService', 'Selecione o Serviço para adicionar um Perfil!').notEmpty();
    req.checkParams('idService', 'Selecione o Serviço para adicionar um Perfil!').isNumeric();

    //verify erro in spope 
    const errors = req.validationErrors();
    if (errors) {
        var response = { errors: [] };
        errors.forEach(function (err) {
            response.errors.push(err.param + ': ' + err.msg);
        });

        return res.status(400).json(response);
    }
    return next();

}

put = (req, res, next) => {

}
module.exports = {
    get: get,
    post: post,
}
