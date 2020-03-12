var mongoose = require('mongoose');

const Profile = mongoose.model(
    "Profile",
    new mongoose.Schema(
        {
            // email: {
            //     type: String,
            //     required: true
            // },
            // password: {
            //     type: String,
            //     required: true
            // }
        },
        { collection: "Profile" }
    )
);

module.exports = Profile;