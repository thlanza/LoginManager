function post (req, res, next) {
    req.checkBody('email', 'Favor informar um email para login.').notEmpty();
    req.checkBody('email', 'Email Inválido.').isEmail();

    req.checkBody('password', 'Favor informar uma senha.').notEmpty();
  
    const errors = req.validationErrors();

    if (errors) {
      var response = { errors: [] };
      errors.forEach(function(err) {
        response.errors.push(err.param + ': ' + err.msg);
      });

      return res.status(400).json(response);
    }

    return next();
}

function postAPI (req, res, next) {
    req.checkParams('hash', 'Hash inválida.').notEmpty();

    req.checkBody('email', 'Favor informar um email para login.').notEmpty();
    req.checkBody('email', 'Email Inválido.').isEmail();

    req.checkBody('password', 'Favor informar uma senha.').notEmpty();
  
    const errors = req.validationErrors();

    if (errors) {
      var response = { errors: [] };
      errors.forEach(function(err) {
        response.errors.push(err.param + ': ' + err.msg);
      });

      return res.status(400).json(response);
    }

    return next();
}

module.exports = {
    post: post,
    postAPI: postAPI
}