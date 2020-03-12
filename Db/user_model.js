var mongoose = require('mongoose');

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
        { collection: "User" }
    )
);

module.exports = Users;