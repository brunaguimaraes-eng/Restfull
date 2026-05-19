//Esse arquivo define o que acontece quando alguém acessa o endereço base da API.

//padrão do consign para injetar a variável app
module.exports = app => {

    app.get('/', (req, res) => { //cria uma rota tipo get para o caminho '/', tendo sucesso(200) retorna a mensagem na tela.
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html'); //avisa que o conteúdo é HTML
        res.end('<h1>Olá</h1>');

    });

};