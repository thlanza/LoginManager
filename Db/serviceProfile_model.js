var mongoose = require('mongoose');

const ServiceProfile = mongoose.model(
    "ServiceProfile",
    new mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            profile: [{
                type: String,
                required: true
            }]
        },
        { collection: "ServiceProfile" }
    )
);

module.exports = ServiceProfile;