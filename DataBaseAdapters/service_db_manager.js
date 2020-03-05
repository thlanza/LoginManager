class ServiceDataBaseManager{

    constructor(){
        //Conecta no tabela/collection Service
    }

    listServices() {

        //return list of object 'Serivce'
        return 'Ok';
    }

    getServiceById(id) {
        //return object 'Service'
    }

    searchServiceByName(name) {
        //return boolean
    }

    searchServiceByDomain(domain) {
        //return boolean
    }

    searchServiceById(id) {
        //return boolean
    }

    getServiceIdBySecret(secret){
        //return 'Id' from object 'Service'
    }

    addService(name, domain) {

    }

    removeService(id) {

    }

    editService(id, name, domain) {

    }
}

module.exports = ServiceDataBaseManager;