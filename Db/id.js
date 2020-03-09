const mongo = require('mongodb');

module.exports = (string) => {
    var id = new mongo.ObjectID(string);
    return id;
}