const express = require('express');
const app = express();

const routeProdutos = require('./routes/routes-produtos');

/*app.use('/produtos',(req, res, next) => {
    res.status(200).json({message: 'Deu certo!'});
});*/

app.use('/produtos',routeProdutos);

module.exports = app;