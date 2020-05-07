 var bodyParser = require('body-parser');

 var data = [{item: 'breakfast'}, {item: 'jogging'}, {item: 'take a bath'}];

 var urlencodedParser = bodyParser.urlencoded({ extended: false }); 

module.exports = function(app){

    //var data = [{item: 'breakfast'}, {item: 'jogging'}, {item: 'take a bath'}];
   

    app.get('/todo', function(req, res){

        res.render('todo', {todo: data});

    });

    app.post('/todo', urlencodedParser ,function(req, res){

        data.push(req.body);
        res.json(data);
        
    });


    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });

        
    });


}