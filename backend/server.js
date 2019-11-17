var express = require('express');
var request = require("request");
var cors = require('cors');
var port = 5000;

var app = express();

app.use(cors());


app.get('/getcustomer', function(req, res) {
    var options = { method: 'GET',
        url: 'http://api.reimaginebanking.com/customers?key=08bd3c4c730de658bc7e03b180c35ba3'};

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        body = processInput(body);


        res.json(body);
    });
    //res.json({"data":"data"})
});

function processInput(body) {

}

app.listen(port, () => console.log("${port}"));
