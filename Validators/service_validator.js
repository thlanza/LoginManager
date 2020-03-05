// class ServiceValidator{

//     constructor(req, res, next){
//         this.req = req;
//         this.res = res;
//         this.next = next;
//     }

//     validatePost(){

//         this.req.checkBody('name', 'Invalid service name value.').notEmpty();
//         this.req.checkBody('domain', 'Invalid service domain value.').notEmpty();

//         const errors = this.req.validationErrors();
//         if (errors) {
//             let response = { errors: [] };
//             errors.forEach(function(err) {
//               response.errors.push(err.msg);
//             });
//             //this.res.statusCode = 400;
//             return this.res.status(400).json(response);
//           }
//           return this.next();
//     }
// }



// module.exports = ServiceValidator;

function get (req, res, next) {
    req.checkParams('id', 'Serviço inválido.').notEmpty();
    req.checkParams('id', 'Serviço inválido.').isNumeric();

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

function post (req, res, next) {
    req.checkBody('name', 'Favor informar o nome do serviço.').notEmpty();
    req.checkBody('name', 'O nome do serviço deve ter no máximo 10 caracteres.').isLength({ max: 10 });

    req.checkBody('domain', 'Favor informar o domínio do serviço.').notEmpty();
  
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

function put (req, res, next) {
  req.checkBody('id', 'Serviço inválido.').notEmpty();
  req.checkBody('id', 'Serviço inválido.').isNumeric();

  req.checkBody('name', 'Favor informar o nome do serviço.').notEmpty();
  req.checkBody('name', 'O nome do serviço deve ter no máximo 10 caracteres.').isLength({ max: 10 });

  req.checkBody('domain', 'Favor informar o domínio do serviço.').notEmpty();

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

function del (req, res, next) {
  req.checkBody('id', 'Serviço inválido.').notEmpty();
  req.checkBody('id', 'Serviço inválido.').isNumeric();

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
  get: get,
  post: post,
  put: put,
  delete: del
}