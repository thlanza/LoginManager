var mongoose = require('mongoose');

const Profile = mongoose.model(
    "Profile",
    new mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        },
        { collection: "Profile" }
    )
);

module.exports = Profile;