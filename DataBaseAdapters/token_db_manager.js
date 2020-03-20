const errorManager = require('../Error/Error_manager')
const Services = require('../Db/serviceProfile_model')

class TokenDataBaseManager{

    constructor(){
        //Conecta no tabela/collection Token
    }

    async addToken(serviceId, hash){
        try {
            // service: {
            //     type: String,
            //     required: true
            //   },
            //   profile: [{
            //     type: String,
            //     required: true
            //   }],
            //   hash: {
            //     type: String,
            //     required: true
            //   },
            //   secret: {
            //     type: String,
            //     required: true
            //   }

                Services.findById(serviceId, function(err, service) {
                  if (err) res.send(err);
              
                  service.service = service.service;
                  service.hash = hash;
                  service.profile = service.profile;
                  service.secret = service.secret;
                  // save the contact and check for errors
                  service.save(function(err) {
                    if (err) res.json(err);
                    res.json({
                      message: "Serviço atualizado",
                      data: service
                    });
                  });
                });
        
        }catch(err){
            return errorManager.ErrorManager(500, "Não foi possível salvar o token")
        }
    }

    // async addUser(body) {
    //     try {
    //       let hash = await bcrypt.hash(body.password, 10);
    //       const newUser = new Users({
    //         name: body.name,
    //         acessos: {
    //           service: body.service,
    //           profile: body.profile
    //         },
    //         email: body.email,
    //         password: hash
    //       });
    
    //       await newUser.save();
    //       const msg = `Usuário incluido com sucesso`;
    //       return msg;
    //     } catch (err) {
    //       return console.log(err);
    //     }
    //   }

    async searchTokenByHash(hash){
        const hash = await Services.findOne({ hash: hash });
        if(hash){
            return true;
        } else {
            return false;
        }
    }

    getUserIdByTokenHash(hash){
        //return 'UserId' from object 'Token' using Hash
    }
}

module.exports = TokenDataBaseManager;