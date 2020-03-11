// const mongoose = require('mongoose');
// const db = require('./mongo');

// db.once("open", () => console.log("Connected to the database success"));

// var UsersSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// });

UsersSchema.methods.testeUsers = function () {
    var greeting = this.name
        ? "Usuário " + this.name + " cadastrado" //ifinline uma condiction so q oneline ? (true) : (else)
        : "I don't have a name";
    console.log(greeting);
}

// var userModel = mongoose.model('Users', UsersSchema);

var userInstance = new userModel({ name: 'Francisco' }); //dados front
userInstance.testeUsers();

userInstance.save(function (err, userdb) {
    if (err) return console.error(err);
    // userdb.testeUsers();
});
