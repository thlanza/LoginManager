function get(req, res, next) {
    req.checkParams('id', 'Perfil inválido.').notEmpty().isNumeric();

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

