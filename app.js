var express = require('express');

var app = express();

app.set('view engine', 'hjs');

app.get('/', function (req, res) {
    res.render('index', {
        x: 10,
        list: ['Alpha', 'Beta', 'Gamma'],
        person: {
            name: 'Jay Leno',
            age: 64,
            gender: 'Male'
        },
        people: [
            {
                name: 'Rick Ord',
                display: true
            },
            {
                name: 'Gary Gillespie',
                display: true
            },
            {
                name: 'Mia Minnes',
                display: false
            }
        ]
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});