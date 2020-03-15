const mongoose = require("mongoose");
const Service = require("../Db/serviceProfile_model");

class ServiceDataBaseManager {
  // //funções que o profile manager vai precisar
  // searchProfileByName(nameProfile, idservice) {
  //     //return boolean
  // }
  // getProfileById(idservice, idProfile) {
  //     //return obj Profile
  // }
  // addProfile(obj) {
  //     //obj.name, obj.describe,obj.idService
  //     //return listProfile
  // }
  // updateProfile(obj) {
  //     //obj.name, obj.describe,obj.idService
  //     //return listProfile
  // }
  // searchProfileById(idservice, idProfile) {
  //     //return boolean
  // }
  // removeProfile(idService, idProfile) {
  //     //return listProfile
  // }
  async validId(id) {
    const isValid = await mongoose.Types.ObjectId.isValid(id);
    return isValid;
  }
  async existId(id) {
    const cont = await Service.countDocuments({ _id: id }, function(
      err,
      count
    ) {
      if (count > 0) console.log(count);
    });
    return cont;
  }
  async existService(service) {
    const cont = await Service.countDocuments({ service: service }, function(
      err,
      count
    ) {
      if (count > 0) console.log(count);
    });
    return cont;
  }
  async listServices() {
    const msg = Service.find({});
    return msg;
  }
  async getServiceById(id) {
    if ((await this.validId(id)) == false) {
      const msg = "id invalido";
      return msg;
    }

    if ((await this.existId(id)) <= 0) {
      const msg = "id nao existente no banco";
      return msg;
    } else {
      const serObject = await Service.findById(id, (err, serv) => {
        if (err) {
          console.log(err);
          return err;
        } else {
          return serv.service;
        }
      });
      return serObject.service;
    }
  }
  async getServiceByName(name) {
    if ((await this.existService(name)) <= 0) {
      const msg = "Service nao existente no banco";
      return msg;
    } else {
      const serObject = await Service.findOne(
        { service: name },
        (err, serv) => {
          if (err) {
            console.log(err);
            return err;
          } else {
            return serv.service;
          }
        }
      );
      return serObject.service;
    }
  }
  async addService(body) {
    try {
      const service = new Service({
        service: body.service,
        profile: body.profile
      });
      await service.save();
      const msg = `incluido com sucesso`;
      return msg;
    } catch (err) {
      return console.log(err);
    }
  }
  async removeService(id) {
    if ((await this.validId(id)) == false) {
      const msg = "id invalido";
      return msg;
    }
    if ((await this.existId(id)) <= 0) {
      const msg = "id nao existente no banco";
      return msg;
    } else {
      await Service.findOneAndRemove({ _id: id }, err => {
        if (err) {
          console.log(err);
          return err;
        }
      });
      const msg = "Deletado";
      console.log(msg);
      return msg;
    }
  }

  editService(id, name, domain) {}
}

module.exports = ServiceDataBaseManager;
