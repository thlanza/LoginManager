require('dotenv').config();
const express = require('express');
const consign = require('consign');

const app = express();

consign({
    //cwd: 'app',
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
})
    .include('Middlewares')
    .then('Controllers')
    .into(app);

module.exports = app;