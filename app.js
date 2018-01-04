var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var jsonParser = bodyParser.json();

app.use(express.static(__dirname+"/public"));

app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.get('/jade',function (request, response){


    response.render('index')

})


app.post("/user", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send('{request.body.userName}');
});

// app.get("/", function(request, response){

//    response.send('....');
// });

app.listen(8000);

