const errorManager = require('../Error/Error_manager')
const Tokens = require('../')

class TokenDataBaseManager{

    constructor(){
        //Conecta no tabela/collection Token
    }

    async addToken(service, hash){
        try {
            const newToken = new Tokens({
                serviceName: service,
                hash: hash
            })
            await newToken.save();
            const msg = "Token incluído com sucesso";
            return msg;
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

    searchTokenByHash(hash){
        //return boolean
    }

    getUserIdByTokenHash(hash){
        //return 'UserId' from object 'Token' using Hash
    }
}

module.exports = TokenDataBaseManager;