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

        if (this.user_db.searchUserByEmail(email)) {
            throw new Error("Email já cadastrado");
        }
        else if(this.user_db.searchUserByMasp(masp)){
            throw new Error("Masp Já cadastrado")
        }

        try{
            this.user_db.addUser(nome,email,masp);
        }
        catch(e){
            this.log.fail(e);
        }

        this.log.success("Adicionado!");
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

    editUser(id,name,maps,email){
        if(!id || id ==""){
            throw new Error("Id inválido. ");
        }
        else if (!name || name == ""){
            throw new Error("Nome inválido. ");
        }
        else if (!masp || masp == ""){
            throw new Error("Nome inválido. ");
        }
        else if (!email || email == ""){
            throw new Error("Nome inválido. ");
        }

        try{
            this.user_db.editUser(id,name,masp,email);
        }
        catch(e){
            this.log.Fail("Erro",e);
            throw new Error(e);
        }

        this.log.success("Editado");
    }
}

module.exports = UserManager;