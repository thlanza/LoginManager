function get(req, res, next) {
    //verify id profile
    req.checkQuery('idProfile', 'Perfil inválido.').notEmpty();
    req.checkQuery('idProfile', 'Perfil inválido.').isNumeric();
    //verify id service
    req.checkQuery('idService', 'Serviço inválido.').notEmpty();
    req.checkQuery('idService', 'Serviço inválido.').isNumeric();

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

function post(req, res, next) {
    //verify name profile to add new profile
    req.checkBody('name', 'Nome do Perfil é obrigatorio').notEmpty();
    req.checkBody('name', 'Nome do Perfil deve conter no maximo 30 caracteres').isLength({ min: 1, max: 30 });

    //verify describe profile to new profile
    req.checkBody('describe', 'Descrição do Perfil é obritaria');
    req.checkBody('describe', 'Descrição deve conter no minimo 10 caracteres e no maximo 50').isLength({ min: 10, max: 50 });

    //verify idService
    req.checkBody('idService', 'Selecione o Serviço para adicionar um Perfil!').notEmpty();
    req.checkBody('idService', 'Selecione o Serviço para adicionar um Perfil!').isNumeric();

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
    //verify name profile to add new profile
    req.checkBody('name', 'Nome do Perfil é obrigatorio').notEmpty();
    req.checkBody('name', 'Nome do Perfil deve conter no maximo 30 caracteres').isLength({ min: 1, max: 30 });

    //verify describe profile to new profile
    req.checkBody('describe', 'Descrição do Perfil é obritaria');
    req.checkBody('describe', 'Descrição deve conter no minimo 10 caracteres e no maximo 50').isLength({ min: 10, max: 50 });

    //verify idService
    req.checkBody('idService', 'Selecione o Serviço para editar um Perfil!').notEmpty();
    req.checkBody('idService', 'Selecione o Serviço para editar um Perfil!').isNumeric();

    //verify idProfile
    req.checkBody('idProfile', 'Perfil Invalido!').notEmpty();
    req.checkBody('idProfile', 'Perfil Invalido!').isNumeric();

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

del = (req, res, next) => {
    //verify id profile
    req.checkBody('idProfile', 'Perfil inválido.').notEmpty();
    req.checkBody('idProfile', 'Perfil inválido.').isNumeric();
    //verify id service
    req.checkBody('idService', 'Serviço inválido.').notEmpty();
    req.checkBody('idService', 'Serviço inválido.').isNumeric();

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
module.exports = {
    get: get,
    post: post,
    put: put,
    del: del
}
