var user_db_manager = require('../DataBaseAdapters/user_db_manager');

class UserManager{
    
    constructor(){
        this.user_db = new user_db_manager();
        
    }

    listUser(){
        var list = this.user_db.listUser();

        return list;
    }

    getUser(id){
        if(!id || id ==''){
            throw new Error('ID invalido')
        }
        try{
            let user = this.user_db.getUserById(id);
            return user;
        }
        catch (e) {
            throw new Error(e);
        }
    }

    addUser(name,email,masp){
        



    }

    deleteUser(id){
        if (!id || id==""){
            throw new Error("ID invalido")
        }
        else if(!this.user_db.getUserById(id)){
            throw new Error("Servico nao encontrado");
        }   

    try {
        this.user_db.removeUser(id);
        }
    catch (e) {
        this.log.fail("Remover," + e);
    }
    this.log.success("Removido")

    }

    editUser(id){
        

    }
}

module.exports = UserManager;