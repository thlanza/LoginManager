var db_manager = require('../Adapters/data-base_manager');

class UserManager{
    
    constructor(){
        this.db = new db_manager();
    }

    listUser(){

    }

    getUser(id){

    }

    addUser(){

    }

    deleteUser(id){

    }

    editUser(id){

    }
}

module.exports = UserManager;