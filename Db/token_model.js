require("./mongo");
var mongoose = require("mongoose");

const Tokens = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      serviceName: {
        type: String,
        required: true
      },
      hash: {
        type: String,
        required: true
      },

    },
    { collection: "Token" }
  )
);

module.exports = Tokens;