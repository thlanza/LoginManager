var mongoose = require('mongoose');

const Service = mongoose.model(
    "Service",
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
        { collection: "Service" }
    )
);

module.exports = Service;