/**
 * Created by Zhang on 16/9/19.
 */

var express = require('express');
var app = express();

app.use(express.static('../web/xhr/index.html'));

app.get('/', function (req, res) {

    res.send('Hello World');
});


var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});