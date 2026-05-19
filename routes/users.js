let NeDB = require('nedb');
let db = new NeDB({

    filename:'users.db',
    autoload:true

})

module.exports = app => {

        app.get('/users', (req, res) => { //define uma rota para buscar o usuário

            db.find({}).sort({name:1}).exec((err, users) => {

                if(err){

                    console.log(`error: ${err}`);
                    res.status(400).json({
                        error:err
                    });
                }else{

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json'); //indica que o conteúdo é um json, em seguida uma lista de array
                    res.json({
                        users
                    });

                }
            });

        });   

        app.post('/users', (req, res) => { //define uma rota para criar e/ou enviar dados de um novo usuário

            db.insert(req.body, (err, users) => {

                if(err){
                    console.log(`error: ${err}`);
                    res.status(400).json({
                        error: err
                    })
                }else{

                    res.status(200).json(users);
                }

            });

        });

    };

