module.exports = (app) => {

    app.get('/users', (req, res) => { //define uma rota para buscar o usuário

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json'); //indica que o conteúdo é um json, em seguida uma lista de array
        res.json({
            users: [{
             name:'Bru',
                email:'bruna@saipos.com',
                id:1
            }]
        });

    });

    app.post('/users', (req, res) => { //define uma rota para criar e/ou enviar dados de um novo usuário

        res.json(req.body); //qualquer json que enviar pela rota POST está disponível no body. Pega os dados recebidos e envia de volta como resposta

    });

};

