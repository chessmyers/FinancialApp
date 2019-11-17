var express = require('express');
var request = require("request");
var cors = require('cors');
var port = 5000;

var app = express();

var objects=[];
var customer_ids=[];
var first_names=[];
var last_names=[];

var acc_id=[];
var rewards=[];
var balances=[];
var acc_nums=[];

var checkid;




app.use(cors());


app.get('/getcustomer/:id', function(req, res) {

    var options = { method: 'GET',
        url: 'http://api.reimaginebanking.com/accounts/5dd149863c8c2216c9fccb2e/purchases?key=08bd3c4c730de658bc7e03b180c35ba3'};

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        body = processInput(body);


        res.json(body);
    });
    //res.json({"data":"data"})
});

app.get('/getpurchases', function(req, res) {
    console.log(req);
    var options = { method: 'GET',
        url: 'http://api.reimaginebanking.com/accounts?type=Checking&key=08bd3c4c730de658bc7e03b180c35ba3'};

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        body = processInput(body);


        res.json(body);
    });
    //res.json({"data":"data"})
});

app.get('/getCheckingAccount', function(req, res) {
    var options = { method: 'GET',
        url: 'http://api.reimaginebanking.com/accounts?type=Checking&key=08bd3c4c730de658bc7e03b180c35ba3'};

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        body = processInput(body);


        res.json(body);
    });
    //res.json({"data":"data"})
});

function processInput(body) {

    for (var i = 0; i < body.length; i++) {
        objects[i] = body[i];
        first_names[i] = objects[i].first_name;
        last_names[i] = objects[i].last_name;
        customer_ids[i] = objects[i]._id;
    }
}

    function logIn() {
        for (var i = 0; i < customer_id.length; i++) {
            if(customer_ids[i]==checkid){
                // return ["true",customer_id[i]];
                var xyz = fHistory(id);

            }
        } return ["false",""];
    }

    // function fHistory(id) {
    //     // request http/id
    //     for (var i = 0; i < tresponse.length; i++) {
    //         alltran[i] = tresponse[i];
    //     }
    //     for (var j = 0; i < alltran.length; i++) {
    //         trdetails[j]=[alltran.amount,alltran.description];
    //     }
    //     return trdetails;
    // }


    app.listen(port, () => console.log("${port}"))
