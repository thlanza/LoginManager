var profile_db_manager = require('../DataBaseAdapters/profile_db_manager');

class ProfileManager{
    
    constructor(){
        this.profile_db = new profile_db_manager();
    }

    listProfile(){

    }

    getProfile(id){

    }

    addProfile(){

    }

    removeProfile(id){

    }

    editProfile(id){

    }
}

module.exports = ProfileManager;