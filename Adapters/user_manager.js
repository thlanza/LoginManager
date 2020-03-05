var user_db_manager = require('../DataBaseAdapters/user_db_manager');

class UserManager{
    
    constructor(){
        this.db = new user_db_manager();
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