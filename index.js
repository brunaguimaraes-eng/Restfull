const express = require('express'); //framework que cria o servidor
const consign = require('consign'); //lê a pasta de rotas
const bodyParser = require('body-parser'); // converte os dados de formulário para um formato que o js entenda, ex: JSON

//contorno do erro de versão do nedb.
const util = require('util');
util.isDate = util.types.isDate;

let app = express(); // inicia o express

//configura o parser para entender as reqs codificadas por URL e reqs no formato json.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

consign().include('routes').include('utils').into(app); //pega tudo que está na pasta routes e inclui dentro do app

app.listen(3000, '127.0.0.1', () => {

    console.log('serv ok');

});
