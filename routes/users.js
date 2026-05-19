let NeDB = require('nedb');
let db = new NeDB({

    filename:'users.db',
    autoload:true

})

module.exports = app => {

    let route = app.route('/users');

    route.get((req, res) => { //define uma rota para buscar o usuário

        db.find({}).sort({name:1}).exec((err, users) => {

            if(err){
                app.utils.error.send(err, req, res);
            }else{

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json'); //indica ue o conteúdo é um json, em seguida uma lista de array
                res.json({
                    users
                });

            }
        });

    });   

    route.post((req, res) => { //define uma rota para criar e/ou enviar dados de um novo usuário

        db.insert(req.body, (err, users) => {

            if(err){
                app.utils.error.send(err, req, res);
            }else{

                res.status(200).json(users);
            }

        });

    });

    let routeId = app.route('/users/:id');

    routeId.get((req,res) =>{

        db.findOne({_id:req.params.id}).exec((err, users) => {

            if(err){
                app.utils.error.send(err, req, res);
            }else{

                res.status(200).json(users);
            }            
        });

    })

    routeId.put((req,res) =>{

        db.update({_id:req.params.id}, req.body, err => {

            if(err){
                app.utils.error.send(err, req, res);
            }else{

                res.status(200).json(Object.assign(req.params, req.body));
            }            
        });

    })

};

