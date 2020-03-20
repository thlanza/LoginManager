require("./mongo");
var mongoose = require("mongoose");

const Services = mongoose.model(
  "Service",
  new mongoose.Schema(
    {
      service: {
        type: String,
        required: true
      },
      profile: [{
        type: String,
        required: true
      }],
      hash: {
        type: String,
        required: true
      },
      secret: {
        type: String,
        required: true
      }
    },
    { collection: "Service" }
  )
);

module.exports = Services;
