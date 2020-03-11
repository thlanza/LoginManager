const Users = require("../Db/user_model");

class UserDataBaseManager {

    searchUser() {
        //return boolean
    }

    searchUserById(id) {
        //return boolean
    }

    validateUser() { }

    async listUsers() {

        const msg = Users.find({})
        return msg;
        // function (err, users) {
        // let username = users.map(function (user) {
        //     return user.email;
        // });

        // resp.json({ emails: username });
        // console.log({ emails: username });
        // const msg = { emails: username };
        // });
    }

    getUserIdByEmail(email) {
        //return 'Id' from object 'User' using 'Email'
    }

    async getUserById(id) {
        const user = await this._userCollection.find();
        return user;
    }

    async addUser(login, passwd) {

        try {
            const newUser = new Users({
                email: login,
                password: passwd
            });
            await newUser.save();
            const msg = `Usuário incluido com sucesso`;
            return msg;
        } catch (err) {
            return console.log(err);
        }
    }

    removeUser(id) { }

    editUser(id) { }

}

module.exports = UserDataBaseManager;