var mongoose = require("mongoose");

const Users = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      acessos: {
        service: {
          type: String,
          required: true
        },
        profile: {
            type: String,
            required: true
          }
      },
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
