var mongoose = require('mongoose');

// var userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// module.exports = mongoose.model('users', userSchema);

const Users = mongoose.model(
    "User",
    new mongoose.Schema(
        {
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        },
        { collection: "AUTH" }
    )
);

module.exports = Users;