const mongoose = require("mongoose");
const Profile = require("../Db/serviceProfile_model");
const Service = require("./service_db_manager");

class ProfileDataBaseManager {
  async validId(id) {
    const isValid = await mongoose.Types.ObjectId.isValid(id);
    return isValid;
  }
  async existId(id) {
    const cont = await Profile.countDocuments({ _id: id }, function (
      err,
      count
    ) {
      if (count > 0) console.log(count);
    });
    return cont;
  }
  async existProfile(profile) {
    const cont = await Profile.countDocuments(
      { profile: [profile] },
      (err, count) => {
        if (count > 0) console.log(count);
      }
    );
    return cont;
  }
  async listProfile() {
    const msg = Profile.find({});
    return msg;
  }
  async getProfileForId(id) {
    if ((await this.validId(id)) == false) {
      const msg = "id invalido";
      return msg;
    }
    if ((await this.existId(id)) <= 0) {
      const msg = "id nao existente no banco";
      return msg;
    } else {
      const serObject = await Profile.findById(id, (err, serv) => {
        if (err) {
          console.log(err);
          return err;
        } else {
          return serv.profile;
        }
      });
      return serObject;
    }
  }
  async getProfileByName(name) {
    // if ((await this.existProfile(name)) <= 0) {
    //   const msg = "Perfil nao existente no banco";
    //   return msg;
    // } else {

    // db.bios.find( { contribs: { $in: [ "ALGOL", "Lisp" ]} } )

    const serObject = await Profile.find(
      { profile: { $in: [name] } },
      (err, serv) => {
        if (err) {
          console.log(err);
          return err;
        } else {
          return serv;
        }
      }
    );

    return await serObject.filter((a) => {
      return a = { name }
    }).map((b) => {
      return b.service;
    });

    // return teste;
    // return serObject;
    // return serObject.map((a)=>{
    //     return a;
    //   }
    // );

  }
  async addProfile(body) {
    const _Service = new Service();
    if (await _Service.existService(body.service) > 0) {
      var servCadastrado = await _Service.getServiceByName(body.service);

      await Profile.updateOne(
        { service: servCadastrado },
        { $addToSet: { profile: body.profile } },
        (err, serv) => {
          if (err) {
            console.log(err);
            return err;
          } else {
            return serv.profile;
          }
        });
      const msg = `Profile incluído com sucesso`;
      return msg;
    } else {
      try {
        const profile = new Profile({
          service: body.service,
          profile: body.profile
        });
        await profile.save();
        const msg = `Profile incluído com sucesso`;
        return msg;
      } catch (err) {
        return console.log(err);
      }
    }
  }
  async removeProfile(id) {
    if ((await this.validId(id)) == false) {
      const msg = "id invalido";
      return msg;
    }
    if ((await this.existId(id)) <= 0) {
      const msg = "id nao existente no banco";
      return msg;
    } else {
      await Profile.findOneAndRemove({ _id: id }, err => {
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

}

module.exports = ProfileDataBaseManager;
