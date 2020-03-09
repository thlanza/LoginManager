const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://10.33.132.238:80';

module.exports =
    async (acao) => {
        console.log('ABRINDO CONEXÃO ...');
        let mongo = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await acao(mongo);
        mongo.close(console.log('CONEXÃO FECHADA COM SUCESSO!'));
    }