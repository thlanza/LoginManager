const mongoose = require('mongoose');
const url = 'mongodb://Seplag:Seplag2020@10.33.132.238:80/AUTH?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false';
// mongoose.connect('mongodb://Seplag:Seplag2020@10.33.132.238:80/SPGF?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', options);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

// mongoose.connect(url, options, (err) => {
//   if (err) throw console.log(err.message);
// });

// const db = mongoose.connection;

// module.exports = db;

module.exports = mongoose.connect(url, options)
  .then(() => {
    console.log("CONEXÃO ABERTA COM SUCESSO!!");
  })
  .catch(err => {
    console.log(err);
  });

